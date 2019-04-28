let mongoose = require('mongoose');

export default mongoose.model('Thread', new mongoose.Schema({
	  id: mongoose.Schema.Types.ObjectId, //
		_id: String,												// 主题ID
		name: String, 											// 主题名
		view: Number,												// 浏览数
		reply: Number 											// 回复数
		// ,publishDate: Date 							// 发布时间
}));