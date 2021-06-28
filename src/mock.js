const Mock = require('mockjs')

const Random = Mock.Random;

const newsData = function() {
    return {
        id: 0,
        title: '人才库',
        routerurl: 'peoplemessage',
    }
}


Mock.mock('/news/api', 'post', newsData);


