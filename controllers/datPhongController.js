window.datPhongController = function ($scope, $http, $location, $filter) {
    $scope.title = 'Đặt phòng'
    $scope.rdoHutThuoc = 'Có hút thuốc'
    $scope.rdoLoaiGiuong = 'Giường đơn'


    $scope.datPhong = function () {
        const apiDatPhong = 'http://localhost:3000/DatPhong'

        let flag = true

        $scope.validate = {
            hoTen: false,
            cccd: false,
            email: false,
            sdt: false,
            loaiPhong: false,
            kichThuocPhong: false,
            ngayDatPhong: false,
            ngayTraPhong: false,
            ghiChu:false
        }

        if (!$scope.inputValue.hoTen) {
            flag = false
            $scope.validate.hoTen = true
        } else {
            let regexHoten = /^[^\d]+$/
            if(!regexHoten.test($scope.inputValue.hoTen)) {
                $scope.validate.hoTen = true
                flag = false
            } else {
                $scope.validate.hoTen = false
            }
        }
        if (!$scope.inputValue.cccd) {
            flag = false
            $scope.validate.cccd = true
        } else {
            let regexcccd = /^\d+$/
            if(!regexcccd.test($scope.inputValue.cccd)) {
                $scope.validate.cccd = true
                flag = false
            } else {
                $scope.validate.cccd = false
            }
        }
        if (!$scope.inputValue.email) {
            flag = false
            $scope.validate.email = true
        } else {
            let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            if(!regexEmail.test($scope.inputValue.email)) {
                $scope.validate.email = true
                flag = false
            } else {
                $scope.validate.email = false
            }
        }
        if (!$scope.inputValue.sdt) {
            flag = false
            $scope.validate.sdt = true
        } else {
            let regexsdt = /((09|03|07|08|05)+([0-9]{8})\b)/g
            if(!regexsdt.test($scope.inputValue.sdt)) {
                $scope.validate.sdt = true
                flag = false
            } else {
                $scope.validate.sdt = false
            }
        }
        if (!$scope.selectValue || !$scope.selectValue.loaiPhong) {
            flag = false
            $scope.validate.loaiPhong = true
        } else {
            if($scope.selectValue.loaiPhong == 'Chọn' || $scope.selectValue.loaiPhong == undefined) {
            }
            $scope.validate.loaiPhong = false
        }
        if (!$scope.selectValue || !$scope.selectValue.kichThuocPhong) {
            flag = false
            $scope.validate.kichThuocPhong = true
        } else {
            $scope.validate.kichThuocPhong = false
        }
        if (!$scope.inputValue.ngayDat) {
            flag = false
            $scope.validate.ngayDatPhong = true
        } else {
            $scope.validate.ngayDatPhong = false
        }
        if (!$scope.inputValue.ngayTra) {
            flag = false
            $scope.validate.ngayTraPhong = true
        } else {
            $scope.validate.ngayTraPhong = false
        }
        if (!$scope.inputValue.ghiChu) {
            flag = false
            $scope.validate.ghiChu = true
        } else {
            $scope.validate.ghiChu = false
        }

        $scope.validateNgayDat = function(ngayDat) {
            $scope.ngayHienTai = new Date()
            $scope.ngayHienTaiSoSanh = $filter('date')($scope.ngayHienTai, 'yyyy-MM-dd')
            let ngaySoSanh = $filter('date')(ngayDat, 'yyyy-MM-dd')
            return ngaySoSanh < $scope.ngayHienTaiSoSanh
        }

        $scope.validateNgayTra = function(ngayDat, ngayTra) {
            $scope.ngayHienTaiSoSanh = $filter('date')(ngayDat, 'yyyy-MM-dd')
            let ngaySoSanh = $filter('date')(ngayTra, 'yyyy-MM-dd')
            return ngaySoSanh < $scope.ngayHienTaiSoSanh
        }

        if(flag) {
            let newDatPhong = {
                hoTen: $scope.inputValue.hoTen,
                cccd: $scope.inputValue.cccd,
                email: $scope.inputValue.email,
                sdt: $scope.inputValue.sdt,
                loaiPhong: $scope.selectValue.loaiPhong,
                kichThuocPhong: $scope.selectValue.kichThuocPhong,
                ngayDatPhong: new Date($scope.inputValue.ngayDat),
                ngayTraPhong: new Date($scope.inputValue.ngayTra),
                hutThuoc: $scope.rdoHutThuoc == 'Có hút thuốc' ? "Có hút thuốc" : "Không hút thuốc",
                loaiGiuong: $scope.rdoLoaiGiuong == 'Giường đơn' ? "Giường đơn" : "Giường đôi",
                ghiChu: $scope.inputValue.ghiChu
            }
    
            $http.post(apiDatPhong, newDatPhong).then(function (response) {
                if (response.status == 201) {
                    alert('Đặt phòng thành công !')
                    $location.path('/thong-tin-dat-phong')
                }
            })
        }
    }
}