import rp from 'request-promise';

// add this somewhere in the middle
const FortuneCookie = {
    getOne() {
        return rp('http://fortunecookieapi.com/v1/cookie')
            .then((res) => JSON.parse(res))
            .then((res) => {
                return res[0].fortune.message;
            });
    },
};

// export default FortuneCookie;
//                 { id: 1, title: 'A post', text: 'Some text', views: 2 },
//                 { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
//             ];
//         },
//     },
//     Post: {
//         author(post) {
//             return { id: 1, firstName: 'Hello', lastName: 'World' };
//         },
//     },
// };

export default FortuneCookie;