const btnCreate = document.querySelector('.btn-create');

btnCreate.addEventListener ('click', () => {
    let partnerName = document.querySelector('.partner-name > input').value;
    console.log(partnerName)  
    return partnerName
});

export default {partnerName};



//добавить id магазина и креды