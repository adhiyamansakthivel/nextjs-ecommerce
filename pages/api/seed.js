import User from "../../models/User";
import db from "../../utils/db";
import data from "../../utils/data";

const handler = async (req, res) => {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({ message: 'seed successfully'});
}
export default handler;
