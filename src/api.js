/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

const publicPath = process.env.PUBLIC_URL

export default {
    recommend: '/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',

    menuInfo: [
        {
            text: '美食',
            icon: `${publicPath}/img/Home/icon_homepage_food_category.png`,
            path: { url: 'http://meishi.meituan.com/i/?ci=20&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1' }
        },
        {
            text: '猫眼电影',
            icon: `${publicPath}/img/Home/icon_homepage_movie_category.png`,
            path: { url: 'https://m.maoyan.com/imeituan/?_v_=yes&my_traffic_sources=group&ci=20&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F99' }
        },
        {
            text: '酒店',
            icon: `${publicPath}/img/Home/icon_homepage_hotel_category.png`,
            path: { url: 'https://i.meituan.com/awp/h5/hotel/search/search.html?stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F20' }
        },
        { text: '休闲娱乐', icon: `${publicPath}/img/Home/icon_homepage_entertainment_category.png` },
        { text: '外卖', icon: `${publicPath}/img/Home/icon_homepage_foottreat_category.png` },
        { text: 'KTV', icon: `${publicPath}/img/Home/icon_homepage_ktv_category.png` },
        { text: '周边游', icon: `${publicPath}/img/Home/icon_homepage_default.png` },
        { text: '丽人', icon: `${publicPath}/img/Home/icon_homepage_beauty_category.png` },
        { text: '小吃快餐', icon: `${publicPath}/img/Home/icon_homepage_default.png` },
        { text: '全部分类', icon: `${publicPath}/img/Home/icon_homepage_default.png` },
        // { text: 'KTV', icon: `${publicPath}/img/Home/icon_homepage_KTVCategory.png` },
        // { text: '优惠买单', icon: `${publicPath}/img/Home/icon_homepage_default.png` },
        // { text: '周边游', icon: `${publicPath}/img/Home/icon_homepage_foottreatCategory.png` },
        // { text: '生活服务', icon: `${publicPath}/img/Home/icon_homepage_lifeServiceCategory.png` },
        // { text: '休闲娱乐', icon: `${publicPath}/img/Home/icon_homepage_entertainmentCategory.png` },
        // { text: '丽人/美发', icon: `${publicPath}/img/Home/icon_homepage_beautyCategory.png` },
        // { text: '购物', icon: `${publicPath}/img/Home/icon_homepage_shoppingCategory.png` },

        // { text: '丽人/美发', icon: `${publicPath}/img/Home/icon_homepage_beautyCategory.png` },
        // { text: '电影', icon: `${publicPath}/img/Home/icon_homepage_movieCategory.png` },
        // { text: '周边游', icon: `${publicPath}/img/Home/icon_homepage_foottreatCategory.png` },
        // { text: '酒店', icon: `${publicPath}/img/Home/icon_homepage_hotelCategory.png` },
        // { text: '优惠买单', icon: `${publicPath}/img/Home/icon_homepage_default.png` },
        // { text: '休闲娱乐', icon: `${publicPath}/img/Home/icon_homepage_entertainmentCategory.png` },
        // { text: 'KTV', icon: `${publicPath}/img/Home/icon_homepage_KTVCategory.png` },
    ]
}

export function recommendUrlWithId(id) {
    return '/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}


export function groupPurchaseDetailWithId(id) {
    return 'http://api.meituan.com/group/v1/deal/list/id/' + id + '?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=4NDQ%2BojQ%2BZGArOWQCEgWI19Pzus%3D&__skno=803C28CE-8BA8-4831-B2DE-7BCD484348D9&__skts=1435888257.411030&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-03-09-14430&userid=10086&utm_campaign=AgroupBgroupC1080988208017226240_c0_e68cafa9e104898bb8bfcd78b64aef671D100Fab_i_group_5_3_poidetaildeallist__a__b___ab_chunceshishuju__a__a___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___b1junglehomepagecatesort__b__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}