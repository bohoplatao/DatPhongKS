window.thongTinChiTietController = function($scope, $routeParams, $http) {
    $scope.title = 'Thông tin chi tiết'
    const apiChiTiet = 'http://localhost:3000/DatPhong'

    let datPhongID = $routeParams.id

    $http.get(apiChiTiet + '/' + datPhongID).then(function(response) {
        console.log(response);
        if(response.status == 200) {
            $scope.inputValue = {
                id: response.data.id,
                hoTen: response.data.hoTen,
                cccd: response.data.cccd,
                email: response.data.email,
                sdt: response.data.sdt,
                ngayDat: new Date(response.data.ngayDatPhong),
                ngayTra: new Date(response.data.ngayTraPhong),
                ghiChu: response.data.ghiChu,
            }
            $scope.selectValue = {
                loaiPhong: response.data.loaiPhong,
                kichThuocPhong: response.data.kichThuocPhong
            }
            $scope.rdoHutThuoc = response.data.hutThuoc
            $scope.rdoLoaiGiuong = response.data.loaiGiuong
        }
    })
}