module.exports = { //workhome
	PROJECT_COLOR: '#AB74FF',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#9146FF',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '动态',
	NEWS_CATE: [
		{ id: 1, title: '最新动态', style: 'leftpic' },
		{ id: 2, title: '服务介绍', style: 'leftpic' },
	],
	NEWS_FIELDS: [

	],

	MEET_NAME: '家政员',
	MEET_CATE: [
		{ id: 1, title: '家政预约', style: 'leftbig1' },
	],
	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示
	MEET_FIELDS: [
		{ mark: 'price', title: '服务价格', type: 'digit', must: true },
		{
			mark: 'edu', title: '学历', type: 'select',
			selectOptions: ['小学', '初中', '高中', '大学', '其他'], must: true
		},
		{
			mark: 'type', title: '等级', type: 'select',
			selectOptions: [
				{ label: '金牌', val: '1' },
				{ label: '银牌', val: '2' },
				{ label: '普通', val: '9' }],
			def: '1', must: true
		},
		{
			mark: 'level', title: '星级', type: 'select',
			selectOptions: [
				{ label: '1星', val: '1' },
				{ label: '2星', val: '2' },
				{ label: '3星', val: '3' },
				{ label: '4星', val: '4' },
				{ label: '5星', val: '5' },
				{ label: '6星', val: '6' }],
			def: '1', must: true
		},
		{
			mark: 'cert', title: '证书', type: 'checkbox', ext: { show: 'row' },
			selectOptions: ['背调合格', '保证金已缴纳', '身份证', '健康证', '体检报告', '执业证书'], must: true
		},
		{ mark: 'shuxiang', title: '属相', type: 'text', must: true },
		{ mark: 'mingzu', title: '民族', type: 'text', must: true },
		{ mark: 'birth', title: '年龄(岁)', type: 'int', must: true },
		{ mark: 'jinyan', title: '经验(年)', type: 'int', must: true },
		{ mark: 'jiguan', title: '籍贯', type: 'text', must: false },
		{ mark: 'spec', title: '特点标签', type: 'tag', must: true, max: 30 },
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'pic', title: '介绍图集', type: 'image', min: 1, max: 10, must: true },
		{ mark: 'content', title: '详细介绍', type: 'textarea', min: 1, max: 5000, must: true },
	],

	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
		{ mark: 'address', type: 'textarea', max: 500, title: '上门地址', must: true, edit: true },
		{ mark: 'area', type: 'text', max: 200, title: '户型面积', must: true, edit: true },
	],

	// 时间默认设置
	MEET_NEW_NODE:
	{
		mark: 'mark-no', start: '10:00', end: '10:59', limit: 1, isLimit: true, status: 1,
		stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
	},
	MEET_NEW_NODE_DAY: [
		{
			mark: 'mark-am', start: '09:00', end: '11:59', limit: 1, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		},
		{
			mark: 'mark-pm', start: '14:00', end: '17:59', limit: 1, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		}
	],

}