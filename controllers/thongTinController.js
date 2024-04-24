window.thongTinController = function($scope, $http) {
    $scope.title = 'Thông tin khách hàng đã đặt phòng'

    const apiDatPhong = 'http://localhost:3000/DatPhong'

    $http.get(apiDatPhong).then(function(response) {
        if(response.status == 200) {
            $scope.listDatPhong = response.data
        }
    })

    $scope.deleteDatPhong = function(deleteID) {
        let confirm = window.confirm("Bạn có muốn xóa không ?")
        if (confirm) {
            $http.delete(`${apiDatPhong}/${deleteID}`).then(function(response) {
                if(response.status == 200) {
                    alert('Bạn đã xóa thành công !')
                }
            })
        }
    }
}