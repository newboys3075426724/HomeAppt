const pageHelper = require('../../../../../helper/page_helper.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const MeetBiz = require('../../../biz/meet_biz.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,
		_params: null,

		sortMenus: [],
		sortItems: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);


		if (options && options.id) {
			this.setData({
				isLoad: true,
				_params: {
					cateId: options.id,
				}
			});
			MeetBiz.setCateTitle();
		} else {
			this._getSearchMenu();
			this.setData({
				isLoad: true
			});
		}



	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: async function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	url: async function (e) {
		pageHelper.url(e, this);
	},

	bindCommListCmpt: function (e) {
		pageHelper.commListListener(this, e);
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	_getSearchMenu: function () {

		let sortItem1 = [
			{ label: '排序', type: '', value: 0 },
			{ label: '星级从高到底', type: 'sort', value: 'MEET_OBJ.level|desc' },
			{ label: '星级从低到高', type: 'sort', value: 'MEET_OBJ.level|asc' },
			{ label: '价格从高到底', type: 'sort', value: 'MEET_OBJ.price|desc' },
			{ label: '价格从低到高', type: 'sort', value: 'MEET_OBJ.price|asc' },
		];

		let sortItem2 = [
			{ label: '星级', type: '', value: 0 },
			{ label: '一星', type: 'level', value: '1' },
			{ label: '二星', type: 'level', value: '2' },
			{ label: '三星', type: 'level', value: '3' },
			{ label: '四星', type: 'level', value: '4' },
			{ label: '五星', type: 'level', value: '5' },
			{ label: '六星', type: 'level', value: '6' },
		];

		let sortItems = [sortItem1,sortItem2];
		let sortMenus = [
			{ label: '全部', type: 'cateId', value: '' },
			{ label: '金牌', type: 'type', value: '1' },
			{ label: '银牌', type: 'type', value: '2' },
		];
		this.setData({
			sortItems,
			sortMenus
		})

	}
})