import {Router} from 'express';
import * as userService from '../services/userService';
import * as authService from '../services/authService';
import authValidateMiddleware from '../helpers/authValidateMiddleware';
import {getAccessTokenFromResponse, setTokens} from '../helpers/tokens';
import {registerUserSchema} from '../validationSchemas/userSchema';

import multer from 'multer';

const upload = multer({storage: multer.memoryStorage()})

const router = Router();

router.post('/register', async (req, res) => {
    const {value, error, errors} = registerUserSchema.validate(req.body);
    if (error || errors)
        return res.status(400).json({
            errors: errors ?
                errors.details.map(e => e.message) :
                error?.details.map(e => e.message)
        });

    const {username, password, firstName, lastName} = value;
    if (await userService.find(username))
        return res.status(409)
            .json({errors: ['user already exist']});

    await userService.create({username, password, firstName, lastName});
    res.status(201).json({username});
});

router.post('/login', async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body;
    if (!await userService.validate({username, password}))
        return res.status(401).json({errors: ['not valid username or password']});

    const tokens = await authService.createToken(username);
    setTokens({...tokens, res});

    const user = await userService.find(username);
    res.json({
        username: user?.username,
        firstName: user?.firstName,
        lastName: user?.lastName,
        imgSrc: user?.imgSrc,
    });
});

router.put('/update',
    upload.single('img'),
    authValidateMiddleware,
    async (req, res) => {
        const accessToken = getAccessTokenFromResponse(res);
        console.log(req.body)
        if (authService.decode(accessToken!)!.payload.username !== req.body.username)
            return res.status(403).json({error: 'forbidden'});
        if (!await userService.find(req.body.username))
            return res.status(404).json({error: 'user not found'});
        console.log(req.file)
        await userService.update({...req.body, img: req.file});
        const updatedUser = await userService.find(req.body.username);
        res.json({
            username: updatedUser?.username,
            firstName: updatedUser?.firstName,
            lastName: updatedUser?.lastName,
            imgSrc: updatedUser?.imgSrc,
        });
    });

router.get('/logout', async (req, res) => {
    res.clearCookie('Authorization');
    res.status(200).send();
});

export default router;