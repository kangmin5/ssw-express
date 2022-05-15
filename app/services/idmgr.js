import getDatabase from "../lambdas/getDatabase.js"
import db from "../models/index.js"

export default function IdmgrService() {
    const Idmgr = db.Idmgr
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();
    return {
        add(req, res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
            new Idmgr(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('회원가입 실패')
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})
                }
            })
        },
        get(req, res, next) {
            Idmgr
                .find()
                .then((sites) => {
                    res.json(sites.body);
                })
                .catch((err) => {
                    console.error(err);
                    next(err);
                })

        }
    }

}