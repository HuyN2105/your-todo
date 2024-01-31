import mongoose, { Schema } from 'mongoose';

const userListSchema = new Schema(
	{
		email: String,
		password: String,
	},
	{
		timestamps: true,
	}
);

const UserList =
	mongoose.models.UserList || mongoose.model('UserList', userListSchema);

export default UserList;
