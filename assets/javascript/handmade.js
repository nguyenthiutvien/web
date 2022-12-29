
const URL_handmade= 'https://63a5720d318b23efa793a600.mockapi.io/api/products';

function getData2(){
    axios.get(`${URL_handmade}`)
    .then(
        function (res){
            console.log(res.data)
            showHandmade(res)
        }
            )
}
function showHandmade(arr){
    for (let i=0; i< arr.data.lengh; i++){
        if(arr.data[i].type.for =='handmade'){
            document.getElementById('products_list-handmade').innerHTML+=`
            <div class ="products_handmade">
            <div class ="img_handmade">
                <img src = "${arr.data[i].image}" alt="">
            </div>
            <div>
                <p>${arr.data[i].name}</p>
                <p>${arr.data[i].price}</p>
            <div>
        </div>
            `
        }
    }
}

getData2();