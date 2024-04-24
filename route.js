let app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when(
        '/trang-chu',
        {
            templateUrl: 'views/trangChu.html',
            controller: trangChuController
        }
    )
    .when(
        '/dat-phong',
        {
            templateUrl: 'views/datPhong.html',
            controller: datPhongController
        }
    )
    .when(
        '/lien-he',
        {
            templateUrl: 'views/lienHe.html',
            controller: lienHeController
        }
    )
    .when(
        '/thong-tin-dat-phong',
        {
            templateUrl: 'views/thongTin.html',
            controller: thongTinController
        }
    )
    .when(
        '/thong-tin-chi-tiet/:id',
        {
            templateUrl: 'views/thongTinChiTiet.html',
            controller: thongTinChiTietController
        }
    )
    .when(
        '/cap-nhat-thong-tin/:id',
        {
            templateUrl: 'views/suaThongTin.html',
            controller: suaController
        }
    )
    .otherwise(
        {
            redirectTo: '/trang-chu'
        }
    )
})