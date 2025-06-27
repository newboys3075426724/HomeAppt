const cloudHelper = require('../../../../../helper/cloud_helper.js');
const pageHelper = require('../../../../../helper/page_helper.js'); 
const ProjectBiz = require('../../../biz/project_biz.js'); 

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false, 
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		ProjectBiz.initPage(this);

		if (!pageHelper.getOptions(this, options)) return;

		this._loadDetail();
	},

	_loadDetail: async function () {
		this.setData({ 
			isLoad: false
		});

		let id = this.data.id;
		if (!id) return;

		let params = {
			id,
		};
		let opt = {
			title: 'bar'
		};
		let meet = await cloudHelper.callCloudData('meet/view', params, opt);
		if (!meet) {
			this.setData({
				isLoad: null
			})
			return;
		}


		this.setData({
			isLoad: true,
			meet, 
		});

	},



	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

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

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: async function () {
		await this._loadDetail();
		wx.stopPullDownRefresh();
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		return {
			title: this.data.meet.MEET_TITLE,
			imageUrl: this.data.meet.MEET_OBJ.cover[0]
		}
	},


	url: function (e) {
		pageHelper.url(e, this);
	},



	onPageScroll: function (e) {
		if (e.scrollTop > 100) {
			this.setData({
				topBtnShow: true
			});
		} else {
			this.setData({
				topBtnShow: false
			});
		}
	},



})