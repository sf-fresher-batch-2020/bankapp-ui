var stateObject = [
    "Andhra Pradesh|1","Arunachal Pradesh|2","Assam|3", "Bihar|4",
    "Chhattisgarh|5","Goa|6","Gujarat|7","Haryana|8","Himachal Pradesh|9",
    "Jharkhand|10","Karnataka|11","Kerala|12","Madhya Pradesh|13","Maharashtra|14",
    "Manipur|15","Meghalaya|16","Mizoram|17","Nagaland|18","Odisha|19","Punjab|20",
    "Rajasthan|21","Sikkim|22","Tamil Nadu|23","Telangana|24","Tripura|25","Uttar Pradesh|26",
    "Uttarakhand|27","West Bengal|28"
];

var cityObject = {
    '1' : [
        'Anantapur|100','Bapulapadu|101','Vishakhapatnam|102'             
    ],
    '2' : [
        'Itanagar|200', 'Naharlagun|201','Bomdila|202'              
    ],
    '3' : [
        'Duliyajan|300','Jorhat|301'            
    ],
    '4' : [
        ' Patna|400','Gaya|401'
    ],
    '5' : [
        'Raipur|500'
    ],
    '6' : [
        'Panaji|600'
    ],
    '7' : [
        'Ahmedabad|700'
    ],
    '8' : [
        'Gurgaon|800'
    ],
    '9' : [
        'Kullu|900'
    ],
    '10': [
        'Ranchi|1000'
    ],
    '11': [
        'Bangalore|1100'
    ],
    '12': [
        'Kochi|1200'
    ],
    '13': [
        'Bhopal |1300'
    ],
    '14': [
        'Mumbai |1400'
    ],
    '15': [
        'Manipur|1500'
    ],
    '16':[
        'Shillong |1600'
    ],
    '17':[
        'Aizawl|1700'
    ],
    '18':[
        'Dimapur|1800'
    ],
    '19':[
        'Puri|1900'
    ],
    '20':[
        'Gidderbaha|2000'
    ],
    '21':[
        'Hanumangarh |2100'
    ],
    '22':[
        'Gangtok |2200'
    ],
    '23':[
        'Chennai  |2300'
    ],
    '24':[
        'Hyderabad  |2400'
    ],
    '25':[
        'Agartala   |2500'
    ],
    '26':[
        'Agra |2600'
    ],
    '27':[
        'Dehradun |2700'
    ],
    '28':[
        'Kolkata  |2800'
    ],


};

var branchObject = {
    '100' : [
        'ICICI Bank Ltd. Anantapur|100,000,000',
    ],
    '101' :[
         'ICICI Bank Ltd. Bapulapadu-Hanuman Junction|100,000,001',
    ],
    '102' : [
        'ICICI Bank Ltd. - Vishakhapatnam|100,000,002',
        'ICICI Bank Ltd. - Vishakhapatnam - Ram Nagar|100,200,002',
    ],
    '200' : [
        'ICICI Bank Ltd. - Itanagar|200,000,000',
    ],
    '201' : [
        'ICICI Bank Ltd. - Naharlagun|200,000,001',
    ],
    '202' : [
        'ICICI Bank Ltd. - Bomdila|200,000,002',
    ],
    '300' : [
   'ICICI Bank Ltd. - Duliyajan|300,000,000',
    ],  
    '301' : [
    'ICICI Bank Ltd. - Jorhat|300,000,001',
    'ICICI Bank Ltd. - Jorhat - Marwari Patty|300,100,003'
    ],
    '400' : [
     'ICICI Bank Ltd. - Patna|400,000,000',
    ],
    '401' : [
    'ICICI Bank Ltd. - Gaya|400,000,001',
    ],
    '500' : [
    'ICICI Bank Ltd. - Raipur - Civil Lines|500,000,000',
    ],  
    '600' : [
        'ICICI Bank Ltd. - Panaji|600,000,000'
    ],
    '700' : [
        'ICICI Bank Ltd. - Ahmedabad - JMC House|700,000,000'
    ],
    '800' : [
        'ICICI Bank Ltd. - Gurgaon - Cyber Greens|800,000,000'
    ],
    '900' : [
        'ICICI Bank Ltd. - Kullu|900,000,000'
    ],
    '1000': [
        'ICICI Bank Ltd. - Ranchi|1000,000,000'
    ],
    '1100': [
        'ICICI Bank Ltd. - Bangalore - M G Road|1100,000,000'
    ],
    '1200':[
        'ICICI Bank Ltd. - Kochi - Kadavantara|1200,000,000'
    ], 
    '1300':[
        'ICICI Bank Ltd. - Bhopal - M P Nagar - Zone II|1300,000,000'
    ],
    '1400':[
        'ICICI Bank Ltd. - Mumbai - Bandra|1400,000,000'
    ],
    '1500':[
        'ICICI Bank Ltd., - Imphal - Singjamei|1500,000,000'
    ], 
    '1600':[
        'ICICI Bank Ltd. - Shillong - lewduh|1600,000,000'
    ],
    '1700':[
        'ICICI Bank Ltd. - Aizawl|1700,000,000'
    ],  
    '1800':[
        'ICICI Bank Ltd. - Dimapur|1800,000,000'
    ],
    '1900':[
        'ICICI Bank Ltd. - Puri|1900,000,000'
    ],
    '2000':[
        'ICICI Bank Ltd. - Gidderbaha|2000,000,000'
    ],
    '2100':[
        'ICICI Bank Ltd. - Hanumangarh - Nai Mandi|2100,000,000'
    ],  
    '2200':[
        'ICICI Bank Ltd. - Gangtok|2200,000,000'
    ], 
    '2300':[
        'ICICI Bank Ltd. - Chennai - Cenotaph Road|2300,000,000'
    ],
    '2400':[
        'ICICI Bank Ltd. - Hyderabad - Khairatabad|2400,000,000'
    ], 
    '2500':[
        'ICICI Bank Ltd. - Agartala|2500,000,000'
    ], 
    '2600':[
        'ICICI Bank Ltd. - Agra - Sadar Bazar|2600,000,000'
    ],  
    '2700':[
        'ICICI Bank Ltd. - Dehradun|2700,000,000'
    ],
    '2800':[
        'ICICI Bank Ltd. - Kolkata - R N Mukherjee|2800,000,000'
    ],                        
};
var codeObject =
    {
        '100,000,000':[ 
        'ICICI Bank Ltd. - Anantapur|',
        'ICIC0000439|',
        'Ganeshan Enclave, Uma Nagar Old Town|',
        'Anantapur|',
        'Andhra Pradesh|'
        ],
        '100,000,001':[ 
        'ICICI Bank Ltd., - Bapulapadu - Hanuman Junction|',
        'ICIC0004128|',
        'H.No.4-109/110, Vijayawada Road, Opp. RTC Bus Stand, Bapulapadu, Hanuman Junction|',
        'Bapulapadu|',
        'Andhra Pradesh|',
        ],
        '100,000,002':[ 
        'ICICI Bank Ltd. - Vishakhapatnam|',
        'IICIC0000060|',
        'Main Road, Dwarkanagar 47, 14, 18, Isnar Satyasri Complex|',
        'Vishakhapatnam|',
        'Andhra Pradesh|',
        ],
        '100,200,002':[ 
        'ICICI Bank Ltd. - Vishakhapatnam - Ram Nagar|',
        'ICIC0000365|',
        'Ram Nagar, Waltair Main Road 10-50-81 / A & B, Block No.53, Opposite Lazarus Hospital|',
        'Vishakhapatnam|',
        'Andhra Pradesh|'
        ],
        '200,000,000':[ 
        'ICICI Bank Ltd. - Itanagar|',
        'ICIC0000706|',
        'Sector E, National Highway - 52 A Near Jnk Public School|',
        'Itanagar|',
        'Arunachal Pradesh|'
        ],
         '200,000,001':[ 
        'ICICI Bank Ltd. - Naharlagun|',
        'ICIC0002593|',
        'Basar Commercial Center, D-Sector Barapani Bazar, Naharlagun|',
        'Naharlagun|',
        'Arunachal Pradesh|'
        ],
        '200,000,002':[ 
        'ICICI Bank Ltd. - Bomdila|',
        'ICIC0002622|',
        'Plot No-149, Hill Top Near Cooperative Building|',
        'Bomdila|',
        'Arunachal Pradesh|'
        ],
        '300,000,000':[ 
        'ICICI Bank Ltd. - Duliyajan|',
        'ICIC0000213|',
        'Kunja Bhavan, Daily Bazar Station Road Ground Floor|',
        'Duliajan|',
        'Assam|'
        ],
        '300,000,001':[ 
        'ICICI Bank Ltd. - Jorhat|',
        'ICIC0000473|',
        'Baruah Chariali, A T Road 413/414, Kasturi Bhavan|',
        'Jorhat|',
        'Assam|'
        ],
        '300,100,003':[ 
        'ICICI Bank Ltd. - Jorhat - Marwari Patty|',
        'ICIC0006646|',
        'M D Gattani Building, Marwaripatty First Floor|',
        'Jorhat|',
        'Assam|'
        ],
        '400,000,000':[ 
            'ICICI Bank Ltd. - Patna City|',
            'ICIC0002383|',
            'Kesari Tola, Khajekala Post - Jhauganj|',
            'Patna|',
            'Bihar|'
        ],
        '400,000,001':[ 
            'ICICI Bank Ltd. - Gaya|',
            'ICIC0000463|',
            'S P Road Ground Floor Hotel Heritage Inn, Rai Kashinath More|',
            'Gaya|',
            'Bihar|'
        ],
        '500,000,000':[ 
            'ICICI Bank Ltd. - Raipur - Civil Lines|',
            'ICIC0000161|',
            'Gore Parisar Behind Raj Bhavan, Civil Lines|',
            'Raipur|',
            'Chhattisgarh|'
        ],
        '600,000,000':[ 
            'ICICI Bank Ltd. - Panaji|',
            'ICIC0000015|',
            'Swami Vivekanand Road 65 Sindur Business Centre|',
            'Panaji|',
            'Goa|'
        ],
        '700,000,000':[ 
            'ICICI Bank Ltd. - Ahmedabad - JMC House|',
            'ICIC0000024|',
            'JMC House Opposite Parimal Gardens, Opposite Parimal Garden, Ambawadi City|',
            'Ahmedabad|',
            'Gujarat|'
        ],
        '800,000,000':[ 
            'ICICI Bank Ltd. - Gurgaon - Cyber Greens|',
            'ICIC0000610|',
            'DLF Cyber Green B-2, Tower-B|',
            'Gurgaon|',
            'Haryana|'
        ], 
        '900,000,000':[ 
            'ICICI Bank Ltd. - Kullu|',
            'ICIC0000736|',
            '40/8, Near Kala Kendra, Dhalpur|',
            'Kullu',
            'Himachal Pradesh|'
        ],
        '1000,000,000':[ 
        'ICICI Bank Ltd. - Ranchi|',
            'ICIC0000175|',
            'Main Road Near Ratanlal Petrol Pump|',
            'Ranchi',
            'Jharkhand|'
        ],   
        '1100,000,000':[ 
            'ICICI Bank Ltd. - Bangalore - M G Road|',
            'ICIC0000002|',
            'Commissariat Road 1 Floor, Ground Floor|',
            'Bangalore',
            'Karnataka|'
        ], 
        '1200,000,000':[ 
            'ICICI Bank Ltd. - Kochi - Kadavantara|',
            'ICIC0000277|',
            'S A Road, Kadavanthra, Ernakulam Adonai Towers|',
            'Kochi',
            'Kerala|'
        ],  
        '1300,000,000':[ 
            'ICICI Bank Ltd. - Bhopal - M P Nagar - Zone II|',
            'ICIC0000055|',
            'Plot Number 11, Zone 2, Alankar Palace Near Pragati Petrol Pump, M P Nagar|',
            'Bhopal',
            'Madhya Pradesh|'
        ],
        '1400,000,000':[ 
            'ICICI Bank Ltd. - Mumbai - Bandra|',
            'ICIC0000038|',
            '206-221,Crystal Building, Waterfield Road Bandra West|',
            'Mumbai',
            'Maharashtra|'
        ],
        '1500,000,000':[ 
            'ICICI Bank Ltd., - Imphal - Singjamei|',
            'ICIC0004318|',
            'Singjamei Mayengbam Leikai PO & PS Singjamei,Dist:Imphal West|',
            'Manipur',
            'Manipur|'
        ], 
        '1600,000,000':[ 
            'ICICI Bank Ltd. - Shillong - lewduh|',
            'ICIC0002018|',
            'Laxmi Plaza, H No97, Goenka Estate Old Gs Road, Qualapatty|',
            'Shilong',
            'Meghalaya|'
        ],
        '1700,000,000':[ 
            'ICICI Bank Ltd. - Aizawl|',
            'ICIC0000772|',
            'Main Street, Zarkawt A - 46, Varte Plaza|',
            'Aizawl',
            'Mizoram|'
        ], 
        '1800,000,000':[ 
            'ICICI Bank Ltd. - Dimapur|',
            'ICIC0000476|',
            'Pwd Road L Chase Complex, Midland|',
            'Dimapur',
            'Nagaland|'
        ],
        '1900,000,000':[ 
            'ICICI Bank Ltd. - Puri|',
            'ICIC0000875|',
            'Balgandi, Grandroad|',
            'Puri',
            'Odisha|'
        ],
        '2000,000,000':[ 
            'ICICI Bank Ltd. - Gidderbaha|',
            'ICIC0001999|',
            'Circular Road Opposite Daula Gate|',
            'Gidderbaha',
            'Punjab|'
        ],  
        '2100,000,000':[ 
            'ICICI Bank Ltd. - Hanumangarh - Nai Mandi|',
            'ICIC0006709|',
            'New Dhan Mandi 252-253 Genral Market|',
            'Hanumangarh',
            'Rajasthan|'
        ],
        '2200,000,000':[ 
            'ICICI Bank Ltd. - Gangtok|',
            'ICIC0000470|',
            'M.G Marg|',
            'Gangtok',
            'Sikkim|'
        ],
        '2300,000,000':[ 
            'ICICI Bank Ltd. - Chennai - Cenotaph Road|',
            'ICIC0000001|',
            'No. 1, Cenotaph Road|',
            'Chennai',
            'Tamil Nadu|'
        ],
        '2400,000,000':[ 
            'ICICI Bank Ltd. - Hyderabad - Khairatabad|',
            'ICIC0000008|',
            '6-2-1012, TGV Mansions Opp Institution of Engineers, Khairatabad|',
            'Hyderabad',
            'Telangana|'
        ], 
        '2500,000,000':[ 
            'ICICI Bank Ltd. - Agartala|',
            'ICIC0000471|',
            'Chitrakatha Complex , Below Hotel Somraj HGB Road|',
            'Agartala',
            'Tripura|'
        ], 
        '2600,000,000':[ 
            'ICICI Bank Ltd. - Agra - Sadar Bazar|',
            'ICIC0000351|',
            'Taj Road 50 A /1,Sadar Bazar|',
            'Agra',
            'Uttar Pradesh|'
        ],
        '2700,000,000':[ 
            'ICICI Bank Ltd. - Dehradun|',
            'ICIC0000164|',
            'NCR, Plaza,24, New Cantt Road Hathibarkala|',
            'Dehradun',
            'Uttarakhand|'
        ],
        '2800,000,000':[ 
            'ICICI Bank Ltd. - Kolkata - R N Mukherjee|',
            'ICIC0000006|',
            '22, R N Mukherjee Road|',
            'Kolkata',
            'West Bengal|'
        ],                                                                       
    };

window.onload = function() {
    console.log(stateObject);
    createOption("State-select", stateObject);			
}
function createOption(elem, array) {            
    var sel = document.getElementById(elem);
    var fragment = document.createDocumentFragment();

    array.forEach(function(array, index) {
        var opt = document.createElement('option');
        var item = array.split("|");
        opt.innerHTML = item[0];
        opt.value = item[1];
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);
}	
$('#State-select').on('change', function(e) {
    var value = $(this).val();
    console.log(cityObject[""+value+""]);
    $('#City-select').find("option:gt(0)").remove();
    $('#Branch-select').find("option:gt(0)").remove();
    $('#account-type').find("option:lt(5)").remove();
    createOption('City-select', cityObject[''+value+'']);
   
});
$('#City-select').on('change', function(e) {
    var value = $(this).val();
    console.log(branchObject[""+value+""]);
    $('#Branch-select').find("option:gt(0)").remove();
    createOption('Branch-select', branchObject[''+value+'']);

});
$('#Branch-select').on('change', function(e) {
    var value = $(this).val();
    console.log(codeObject[""+value+""]);
    $('#account-type').find("option:lt(5)").remove();
    createOption('account-type', codeObject[''+value+'']);

});

