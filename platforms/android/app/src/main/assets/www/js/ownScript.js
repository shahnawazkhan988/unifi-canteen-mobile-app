var apiUrl = "https://mensa-api.herokuapp.com"
//var apiUrl = "http://localhost:8000"

 // get current date and day name start
var current_datetime = new Date();
var currentDate = ('0' + current_datetime.getDate()).slice(-2) + '/' + ('0' + (current_datetime.getMonth()+1)).slice(-2) + '/' + current_datetime.getFullYear();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var todayDayName = weekday[current_datetime.getDay()];
// get current date and day name end

// get current page id start
var getHtmlPageName = '';
$(document).on('pagebeforeshow', function() {
  getHtmlPageName = $.mobile.activePage.attr('id');
  //alert(getHtmlPageName);
});
// get current page id end

// dynamic function for all pages to slide
    $(document).on('mobileinit', function () {
      $.mobile.defaultPageTransition = 'slide';
    //  var currentPage = $.mobile.pageContainer = $(".currentPage");
    //  console.log(currentPage)
      $.mobile.allowCrossDomainPages = true;

    
    });

// dynamic navigation to add all pages
//class="panelContainer" data-theme="c"
  //var panel = '<div data-role="panel" id="mypanel" data-theme="a" ><img src="img/user3.png" width="100%" height="auto"><ul data-role="listview" id="navlist" data-inset="true" data-theme="a"> <li><a href="#login" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Info</a></li> <li><a href="#addTodayMenu" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Add Today Menu</a></li> <li><a href="#addmenu" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Add Menu Items</a></li> <li ><a href="#addmenucat" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Add Menu Category</a></li><li ><a href="#showTodayMenu" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Today Menu</a></li><li ><a href="#canteenReg" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Canteen Registration</a></li><li ><a href="#showCanteenList" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Canteen List</a></li><li><a href="javascript:void(0);" onclick="logOutApp()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Log Out</a></li></ul></div>';
  var sessionValue = '';
 

  // yaha pay if condition lagani hai kay login page kay ilawa yeh work karay
  $(document).on('pagebeforeshow', function() 
  {
    sessionValue = JSON.parse(localStorage.getItem('customHeader'))
    if(sessionValue != null)
    {
      if(sessionValue.role == 1)
      {
        var panel = '<div data-role="panel" id="mypanel" data-theme="a" ><img src="img/user3.png" width="100%" height="auto"><ul data-role="listview" id="navlist" data-inset="true" data-theme="a"><li ><a href="javascript:void(0);" onclick="pageshowCanteenList()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Canteen List</a></li><li><a href="javascript:void(0);" onclick="logOutApp()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Log Out</a></li></ul></div>';
      }
      if(sessionValue.role == 2)
      {
        // var panel = '<div data-role="panel" id="mypanel" data-theme="a" ><img src="img/user3.png" width="100%" height="auto"><ul data-role="listview" id="navlist" data-inset="true" data-theme="a"> <li><a href="#login" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Info</a></li> <li><a href="#addTodayMenu" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Add Today Menu</a></li> <li><a href="#addmenu" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Add Menu Items</a></li> <li ><a href="#addmenucat" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Add Menu Category</a></li><li ><a href="#showTodayMenu" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Today Menu</a></li><li ><a href="#canteenReg" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Canteen Registration</a></li><li ><a href="#showCanteenList" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Canteen List</a></li><li><a href="javascript:void(0);" onclick="logOutApp()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Log Out</a></li></ul></div>';
        var panel = '<div data-role="panel" id="mypanel" data-theme="a" ><img src="img/user3.png" width="100%" height="auto"><ul data-role="listview" id="navlist" data-inset="true" data-theme="a"><li><a href="javascript:void(0);" onclick="pageaddTodayMenu()" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Add Today Menu</a></li> <li><a href="javascript:void(0);" onclick="pageaddmenu()" class="ui-btn ui-icon-carat-r ui-btn-icon-right">Add Menu Items</a></li> <li ><a href="javascript:void(0);" onclick="pageaddmenucat()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Add Menu Category</a></li><li ><a href="javascript:void(0);" onclick="pageshowCanteenList()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Canteen List</a></li><li><a href="javascript:void(0);" onclick="logOutApp()" class="ui-btn ui-icon-carat-r ui-btn-icon-right" >Log Out</a></li></ul></div>';
      }
      console.log(sessionValue.role);
    }
    
    if(getHtmlPageName != 'login')
    {
      //$(document).on('pagebeforecreate', function () {
      $.mobile.pageContainer.prepend(panel);
      $("#mypanel").panel().trigger("create");
      $("#mypanel").listview().trigger("create");
      
    // });
    }
  });

// dynamic header and footer 
$(document).on("pagebeforecreate", function(e) {
    var page = $(e.target),
      shared = page.data("share");
    //   console.log(page,shared)
    if (shared) {
      var header = $('[data-role="header"]', shared),
        footer = $('[data-role="footer"]', shared);
        // console.log(header,footer)
        header.clone().appendTo(page)
        footer.clone().appendTo(page)
    }
  });

 // upload menu image
 $("input[type=file]").change(function(){
    var file = $("input[type=file]")[0].files[0];
    alert(file.name + "\n" +
          file.type + "\n" + 
          file.size + "\n" + 
          file.lastModifiedDate);
});


//page addTodayMenu
function pageaddTodayMenu()
{
    window.location.href = '#addTodayMenu'; 
    window.location.reload(true);
}

//page addmenu
function pageaddmenu()
{
    window.location.href = '#addmenu'; 
    window.location.reload(true);
}

//page addmenucat
function pageaddmenucat()
{
    window.location.href = '#addmenucat'; 
    window.location.reload(true);
}

//page showCanteenList
function pageshowCanteenList()
{
    window.location.href = '#showCanteenList'; 
    window.location.reload(true);
}




//collapsible

// $( document ).on( "pagecreate", function() {
//         var nextId = 1;
//         $("#btnAddMore").click(function() {
//             nextId++;
//             var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>Menu " + nextId + "</h3><label for='txtName'>Category Name:</label> <select name='select-native-1' id='select-native-1'> <option value='1'>The 1st Option</option> <option value='2'>The 2nd Option</option> <option value='3'>The 3rd Option</option> <option value='4'>The 4th Option</option> </select> <label for='txtMenuName'>Menu Name:</label> <input type='text' id='txtMenuName' name='txtMenuName' data-clear-btn='true'/> <label for='txtMenuDescription'>Menu Description:</label> <input type='text' id='txtMenuDescription' name='txtMenuDescription' data-clear-btn='true'/> <label for='txtUploadMenuImage'>Upload Menu Image:</label><input type='file'  name='txtUploadMenuImage' accept='image/*' capture></div>";
//             $( "#set" ).append( content ).collapsibleset( "refresh" );
//         });
//     });

    




//login code

var loginFlag = 'no'
function loginData()
{
  var $matricola = $('#matricola');
  var $pass = $('#pass');

  if($matricola.val() == "")
  {
    $(".matricolaErr").html("Enter Matricola No" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
    
  }
  else if(!$.isNumeric($($matricola).val()))
  {
    $(".matricolaErr").html("Enter only number" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
  }
  else if($pass.val() == "")
  {
    $(".passErr").html("Enter Password" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
  }
  else if($matricola.val() && $.isNumeric($($matricola).val()) && $pass.val())
  {
    $(".matricolaErr").html("")
    $(".passErr").html("")
    loginFlag = 'yes'
  }
  if(loginFlag == 'yes')
  {    
    sessionStorage.clear();
    
  var data = {
    matricola: $matricola.val(),
    pass: $pass.val(),
  };
  console.log(data);
  $.ajax({
    type: "POST",
    url: apiUrl+"/login",
    //crossDomain: true,
    contentType: "application/json",     
    dataType: "json",
    headers: {"Access-Control-Allow-Origin": "*"},
   // mode: 'cors',
    data: JSON.stringify(data),
    beforeSend: function(){
      // Show image container
      $("#loader").show();
     },    
    success: function(result) 
    {
      
      // console.log(JSON.stringify(result['data']['matricola']));
      if(result.Status == "200")
      {
      var parsedResult = result.data;
      

      var cusomtHeader = 
      {
        "matricola" : parsedResult.matricola,
        "token" : result.token,
        "role" : parsedResult.role,
        "can_id": parsedResult.can_id,
        "Access-Control-Allow-Origin": "*"
      };
      localStorage.setItem('customHeader',JSON.stringify(cusomtHeader));
      //console.log(localStorage.getItem('customHeader'));
      
      if(parsedResult.role == 2)
      {        
        //canteenTodayMenu();
        // var dataInput = "";
        // dataInput = {"id":  ""}
       // getcat();
        window.location.href = '#addTodayMenu'
        window.location.reload(true);
      }
      else
      {
        //var jsonCantList = {"can_id":  ""}
        // getCanteenListData()
        window.location.href = '#showCanteenList' 
        window.location.reload(true);
      }
      
    $("#matricola").val("")
    $("#pass").val("")
    }
    if(result.Status == "404")
    {
      $(".passErr").html("Matricola No or Password are incorrect" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
    }   
    },
    error: function(result) 
    {
              alert('error');
    },

    complete:function(data){
      // Hide image container
      $("#loader").hide();
     }
  });
}
}

function testAPi()
{
  $.ajax({
    type: "GET",
    url: apiUrl+"/test",
    //crossDomain: true,
    contentType: "application/json",     
    dataType: "json",  
               
    success: function(result) 
    {
        console.log(JSON.stringify(result));
    },
    error: function(result) 
    {
              alert('error');
    }

  });
}

// log out
var sessDestroy = ''
function logOutApp()
{
  sessDestroy = localStorage.clear();
  //console.log(sessDestroy)
  // if(sessDestroy)
  // {
    window.location.href = '#login'; 
    window.location.reload(true);
    //$.mobile.changePage('page2.html', { dataUrl : "page2.html?parameter=123", data : { 'paremeter' : '123' }, reloadPage : true, changeHash : true });
   // $.mobile.changePage('#login', { reloadPage : true, changeHash : false });
  // }
}

//canteen today menu
var currentCanteenTodayMenuRequest = null; 
function canteenTodayMenu(scpecficCateenId)
{
  // window.location.href = '#addTodayMenu'
 // console.log(scpecficCateenId)
 //alert(scpecficCateenId);

 currentCanteenTodayMenuRequest = $.ajax({
  type: "GET",
  url: apiUrl+"/gettodaymenu?can_id="+scpecficCateenId,
  contentType: "application/json",     
  dataType: "json",
  headers: JSON.parse(localStorage.getItem('customHeader')),
  // data: JSON.stringify(dataInput),
  beforeSend : function(xhr, opts)
    {           
      // if(currentCanteenTodayMenuRequest != null) 
      // {
      //   xhr.abort();
      // }
      $("#getTodayMenuContent").empty();
      document.getElementById("canHeading").innerHTML = "";
      $("#loader").show();
    },   
            
  success: function(result) 
  {
    
    
    var arrayCatName = [];
    // var todayMenuContent1 = "";
    // var todayMenuContent2 = "";
    var todayMenuContent = "";
    var x = 0;
    if(result.Status == "200")
    {
      console.log(result)
      
      document.getElementById("canHeading").innerHTML =result.data[0].canteenName ;
      //$('#canHeading').html('dd');
      for (i=0; i<(result.data.length); i++)
      { 
         
        if(!arrayCatName.includes(result.data[i].catName)) 
        {
          
          x++;
          arrayCatName.push(result.data[i].catName);
          todayMenuContent = '<div data-role="collapsible" data-id="'+result.data[i].catName +'"> <h2>'+result.data[i].catName +'</h2> <ul data-role="listview" data-filter="true" > <li>'+result.data[i].menuName +'</li> </ul></div>';
          $( "#getTodayMenuContent" ).append($(todayMenuContent).collapsible()).trigger("create");
          //$( "#getTodayMenuContent" ).append($(todayMenuContent));
          //todayMenuContent = "";
        }
        else
        {
           //var cat_name = $( "#getTodayMenuContent" ).children().eq(x-1).attr('data-id');
           //if in array of arrayCatName
           //if (cat_name === result.data[i].catName)
           //{
            //$( "#getTodayMenuContent div:nth-child(2) ul:first").append("<li>test</li>");
            //$( "#getTodayMenuContent div:nth-child(2) ul:first").append("<li>test</li>")
           // $( "#getTodayMenuContent" ).children().eq(x-1).find("ul:first").append('<li>'+result.data[i].menuName +'</li> ');
           $( "#getTodayMenuContent").find('[data-id="'+result.data[i].catName+'"]').find("ul:first").append('<li>'+result.data[i].menuName +'</li> ').listview('refresh');

             //console.log(cat_name)
           //}

        }
        //console.log(arrayCatName)
        //todayMenuContent2 += '<li>'+result.data[i].menuName +'</li> ';
        //$( "#getTodayMenuContent" ).append($(todayMenuContent).collapsible()).trigger("create");
        //todayMenuContent = "";
        // if(!arrayCatName.includes(result.data[i].catName)) 
        // {
        //   todayMenuContent = todayMenuContent1 + todayMenuContent2 + '</ul> </div>';
        //   $( "#getTodayMenuContent" ).append($(todayMenuContent).collapsible()).trigger("create");
        //   todayMenuContent1 = "";
        //   todayMenuContent2 = "";
        //   todayMenuContent = "";
        // }
        console.log(todayMenuContent)
        //$( "#getTodayMenuContent" ).append($(todayMenuContent).collapsible()).trigger("create");
      }
      // let counts = {};
      // for(let i =0; i < result.data.length; i++){ 
      //   if (counts[result.data[i].catName]){
      //   counts[result.data[i].catName] += 1
      //   //console.log(counts[result.data[i].catName] += 1)
      //   } else {
      //   counts[result.data[i].catName] = 1
      //   //console.log(counts[result.data[i].catName] = 1)
      //   }
      //  }  
      //  for (let prop in counts){
      //      if (counts[prop] >= 2){
      //          console.log(prop + " counted: " + counts[prop] + " times.")
      //          var todayMenuContent = '<div data-role="collapsible" > <h2>'+prop +'</h2> <ul data-role="listview" data-filter="true"> <li>'+result.data[i].menuName +'</li> </ul> </div>'
      //          $( "#getTodayMenuContent" ).append($(todayMenuContent).collapsible()).trigger("create");
      //      }
      //  }
    //  console.log(counts)
      
    }
    if(result.Status == "404")
    {
      document.getElementById("canHeading").innerHTML =result.data ;
    }     
  },
  error: function(result) 
  {
            alert('error');
  }

});

}

var getSerializeData = ''

function postAddTodayMenu()
{
  getSerializeData = $('#addTodayMenuData').serializeArray()
  console.log(getSerializeData);
  
  var getHeader =JSON.parse(localStorage.getItem('customHeader'))
  //var dataApend = [];
  var resultData = [];
  var x=0;
  for (i=1; i<(getSerializeData.length); i++)
    {
      //dataApend = {"test" : "test"};
      //dataApend.push('{'+'"'+ getSerializeData[i].name +':'+ getSerializeData[i].value   +'"'+', '+'"'+ getSerializeData[0].name +':'+ getSerializeData[0].value +'"'+','+'"'+ "can_id" +':'+ getHeader.can_id +'"'+', '+'"'+ "date" +':'+ currentDate +'"'+', '+'"'+ "day" +':'+ todayDayName +'"'+ '}')
      //dataApend.push('{' +getSerializeData[i].name +'"'+': '+'"'+ getSerializeData[i].value   +'"'+', '+'"'+ getSerializeData[0].name +'"'+':'+'"'+ getSerializeData[0].value +'"'+','+'"'+ "can_id" +'"'+':'+'"'+ getHeader.can_id +'"'+', '+'"'+ "date" +'"'+':'+'"'+ currentDate +'"'+', '+'"'+ "day" +'"'+':'+'"'+ todayDayName +'}')
     // getSerializeDataObj = getSerializeData[i].name;
    //  dataApend['canteen_id'] = ObjectId('"'+getHeader.can_id +'"');
    //  dataApend[getSerializeData[0].name] = 'ObjectId('+getSerializeData[0].value+')';
    //   dataApend[getSerializeData[i].name] = 'ObjectId('+getSerializeData[i].value+')'; 
     var dataApend = {};
     dataApend['_id'] = randomNummber(),
     dataApend['canteen_id'] = getHeader.can_id;
     dataApend[getSerializeData[0].name] = Number(getSerializeData[0].value);
      dataApend[getSerializeData[i].name] = Number(getSerializeData[i].value);      
      
      dataApend['date'] = currentDate;
      dataApend['day'] = todayDayName;
      
      resultData.push(dataApend);
      
      x++;

    }
    //console.log(resultData); 
  // console.log(JSON.stringify(resultData));return;
    $.ajax({
      type: "POST",
      url: apiUrl+"/addtodaymenu",
      contentType: "application/json",     
      dataType: "json",
      headers: JSON.parse(localStorage.getItem('customHeader')),
      data: JSON.stringify(resultData),

      beforeSend : function(xhr, opts)
      {           
        $("#loader").show();
      },   
                 
      success: function(result) 
      {
        if(result.Status == "200")
        {
          $(".dataInsert").html(result.data)
        }
        if(result.Status == "404")
        {
          $(".dataInsert").html(result.data)
        }   
      },
      error: function(result) 
      {
                alert('error');
      }
  
    }); 
     
  // console.log(JSON.stringify(dataApend));
}


// post menu category
var getMenuCatSerializeData = ''
var menuCatFlag = 'no'
function postAddMenuCat()
{
  var $txtCategoryName = $('#txtCategoryName');

  if($txtCategoryName.val() == "")
  {
    $(".categoryNameErr").html("Enter Category Name" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
  }
  else
  {
    menuCatFlag = 'yes'
    $(".categoryNameErr").html("")
  }

  if(menuCatFlag == 'yes')
  {
    
    getMenuCatSerializeData = $('#addMenuCatFormData').serializeArray()
    console.log(getMenuCatSerializeData)
    var getHeader =JSON.parse(localStorage.getItem('customHeader'))
    //var dataApend = [];
    var resultData = [];
    var x=0;
    var getRandomNum = randomNummber()
    for (i=1; i<(getMenuCatSerializeData.length); i++)
      {
      var dataApend = {};
      
      dataApend['_id'] = getRandomNum;
      dataApend['cat_id'] = getRandomNum;
      dataApend[getMenuCatSerializeData[0].name] = getMenuCatSerializeData[0].value;  
      dataApend[getMenuCatSerializeData[i].name] = getMenuCatSerializeData[i].value;        
      resultData.push(dataApend);       
      x++;

      }
      //console.log(resultData); 
   // console.log(JSON.stringify(resultData));return;
      $.ajax({
        type: "POST",
        url: apiUrl+"/addcat",
        contentType: "application/json",     
        dataType: "json",
        headers: JSON.parse(localStorage.getItem('customHeader')),
        data: JSON.stringify(resultData),
        beforeSend : function(xhr, opts)
        {           
          $("#loader").show();
        },            
        success: function(result) 
        {
          if(result.Status == "200")
          {
            $(".dataInsert").html(result.data)
          }
          if(result.Status == "404")
          {
            $(".dataInsert").html(result.data)
          }   
        },
        error: function(result) 
        {
                  alert('error');
        }
    
      }); 
      
    }
  // console.log(JSON.stringify(dataApend));
}


// function getcat()
// {
//   $.ajax({
//     type: "GET",
//     url: apiUrl+"/getcat?id=",
//     contentType: "application/json",     
//     dataType: "json",
//     headers: JSON.parse(localStorage.getItem('customHeader')),
//     // data: JSON.stringify(dataInput),
               
//     success: function(result) 
//     {
//       if(result.Status == "200")
//       {
//         window.location.href = '#addTodayMenu'
//         var options = $('#selectGetCat');        
//         for (i=0; i<(result.data.length); i++)
//         {          
//           //options+='<option value="'+ result.data[i]._id.$oid +'"> "'+result.data[i].cat_name+'" </option>';
//           options.append('<option value="'+ result.data[i]._id +'"> '+result.data[i].cat_name+' </option>');
//         }
//         $('#selectGetCat').change(function()
//         {
//           var menuCatValue = this.value;
//           // get menu list base on specific category
//           getMenuCatBase(menuCatValue);
          
//         });
//       }     
//     },
//     error: function(result) 
//     {
//               alert('error');
//     }

//   });
// }

// Add more get category to add menu page add menu
// var nextId = 1;
// var el =  $( "#set" );
// function addMoreMenuItem()
// {   
  
//     nextId++;   
    
//     var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>Menu " + nextId + "</h3><label for='txtName'>Category Name:</label> <select name='select-native-1' id='select-native-1'> <option value='1'>The 1st Option</option> <option value='2'>The 2nd Option</option> <option value='3'>The 3rd Option</option> <option value='4'>The 4th Option</option> </select> <label for='txtMenuName'>Menu Name:</label> <input type='text' id='txtMenuName' name='txtMenuName' data-clear-btn='true'/> <label for='txtMenuDescription'>Menu Description:</label> <input type='text' id='txtMenuDescription' name='txtMenuDescription' data-clear-btn='true'/> <label for='txtUploadMenuImage'>Upload Menu Image:</label><input type='file'  name='txtUploadMenuImage' accept='image/*' capture></div>";
//    // $('#set'+ nextId ).append( content ).collapsible('refresh');
 
//     $( "#set" ).append( content ).collapsibleset( "refresh" );
//     el.find('#set'+ nextId).collapsible({theme:'c',refresh:true}); 
//      
    
// }

function addMoreMenuItem()
{
  var addmenuPage = 'addmenuPage'
  getcatformenu(addmenuPage)
}

//get category to add menu page add menu
var nextId = 0;
var selectorId = 0;
var el =  $( "#set" );
var currentGetCatforMenuDataRequest = null; 
function getcatformenu(pageNameID)
{
  currentGetCatforMenuDataRequest = $.ajax({
    type: "GET",
    url: apiUrl+"/getcat?id=",
    contentType: "application/json",     
    dataType: "json",
    headers: JSON.parse(localStorage.getItem('customHeader')),
    // data: JSON.stringify(dataInput),
    // beforeSend : function(xhr, opts)
    // {           
    //   if(currentGetCatforMenuDataRequest != null) 
    //   {
    //     xhr.abort();
    //   }
    // },   
    beforeSend : function(xhr, opts)
    {           
      $("#loader").show();
    },             
    success: function(result) 
    {
      if(result.Status == "200")
      {
        console.log(pageNameID)
        if(pageNameID == 'addmenuPage')
        {
          
          nextId++;

          // save menuID on local storage
          localStorage.setItem('menuID','set'+ nextId);
          var menuID = localStorage.getItem('menuID');
          var num = menuID.match(/\d+/g).map(Number);
          
          var content = "<div data-role='collapsible' id='" + menuID + "' ><h3>Menu " + num + "</h3><label for='txtName'>Category Name:</label> <select name='cat_id' id='select-native-1" + selectorId + "'> <option selected='selected'> Please Select Category </option> </select> <label for='txtMenuName'>Menu Name:</label> <input type='text' id='txtMenuName' name='menu_name' data-clear-btn='true'/> <label for='txtMenuDescription'>Menu Description:</label> <input type='text' id='txtMenuDescription' name='menu_description' data-clear-btn='true'/> </div>";
          $( "#set" ).append($(content).collapsible()).trigger("create");
          //el.find('#set'+ nextId).collapsible({theme:'c',refresh:true}); 
          var options = $('#select-native-1'+selectorId++);        
          for (i=0; i<(result.data.length); i++)
          {          
            
            //options+='<option value="'+ result.data[i]._id.$oid +'"> "'+result.data[i].cat_name+'" </option>';
            options.append('<option value="'+ result.data[i]._id +'"> '+result.data[i].cat_name+' </option>');
            //$('#set'+ nextId ).collapsible('refresh');     
            
          }
        }
        if(pageNameID == 'addTodayMenuPage')
        {
          $("#selectGetCat").empty();
         
          var options = $('#selectGetCat'); 
          

          for (i=0; i<(result.data.length); i++)
          {          
            //options+='<option value="'+ result.data[i]._id.$oid +'"> "'+result.data[i].cat_name+'" </option>';
            options.append('<option value="'+ result.data[i]._id +'"> '+result.data[i].cat_name+' </option>');
          }
          $('#selectGetCat').change(function()
          {
            var menuCatValue = Number(this.value);
            // get menu list base on specific category
            getMenuCatBase(menuCatValue);
            
          });
        }
        
      }     
    },
    error: function(result) 
    {
              alert('error');
    }

  });
}



// Remove last menu tab
function removeMenuTab()
{
  var menuID = localStorage.getItem('menuID');
  var num = menuID.match(/\d+/g).map(Number);
  var setNum = num[0]-1;
  console.log(setNum);

  if(menuID != 'set1')
  {
    $('#'+menuID).remove();
    localStorage.removeItem('menuID');
    localStorage.setItem('menuID','set'+setNum);
  }
  if(menuID == 'set1')
  {
    $(".dataNotRemove").html("You cannot delete the first menu" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
  }
  else
  {
    menuCatFlag = 'yes'
    $(".dataNotRemove").html("")
  }
  
}

var getaddMenuFormSerializeData = '';
// post Add Menu Data

function submitMenuItem(){
 
  getaddMenuFormSerializeData = $('#addMenuForm').serializeArray()
 // console.log(getaddMenuFormSerializeData);
  var getHeader =JSON.parse(localStorage.getItem('customHeader'))
  //console.log(JSON.stringify(getHeader['can_id']));//return;
  //var dataApend = [];
  if(getHeader['can_id'] == '')
  {
    $(".menuItemErr").html("Only Canteen Member have right to insert menu" +" " + '<i class="fa fa-times" aria-hidden="true"></i>');    
  }
  // var $txtMenuName = $('#txtMenuName');

  // // if($txtMenuName.val() == "")
  // // {
  // //   $(".txtMenuNameErr").html("Enter Category Name" +" " + '<i class="fa fa-times" aria-hidden="true"></i>')
  // // }
  else
  {
    $(".menuItemErr").html("");
    var resultData = [];
    var x=1;
    
    var dataApend = {};
    
    for (i=1; i<=(getaddMenuFormSerializeData.length); i++)
    {
      
      var getRandomNum = randomNummber();
      
      
      dataApend['_id'] = getRandomNum;
      dataApend['pk'] = getRandomNum;
      if(getaddMenuFormSerializeData[i-1].name == "cat_id")
      {
      dataApend[getaddMenuFormSerializeData[i-1].name] = Number(getaddMenuFormSerializeData[i-1].value);
      }
      else
      {
        dataApend[getaddMenuFormSerializeData[i-1].name] = getaddMenuFormSerializeData[i-1].value;
      }
      dataApend['date'] = currentDate;
      dataApend['day'] = todayDayName;        
      //resultData.push(dataApend);
        
       

        if(x == 3)
      {
        resultData.push(dataApend);
        dataApend = {};
        x=0;
        
      }
      x++;
        //console.log(x)
        //console.log(i)
    }
   // console.log(resultData); return;

    $.ajax({
      type: "POST",
      url: apiUrl+"/addmenu",
      contentType: "application/json",     
      dataType: "json",
      headers: JSON.parse(localStorage.getItem('customHeader')),
      data: JSON.stringify(resultData),
      beforeSend : function(xhr, opts)
      {           
        $("#loader").show();
      },             
      success: function(result) 
      {
        if(result.Status == "200")
        {
          $(".dataInsert").html(result.data)
        }
        if(result.Status == "404")
        {
          $(".dataInsert").html(result.data)
        }
        console.log(result)
      },
      error: function(result) 
      {
                alert('error');
      }
  
    });
    //dd
  }
}


// get menu based on menu category
var currentRequest = null;   
function getMenuCatBase(menuCatValue)
{
  currentRequest = $.ajax({
    type: "GET",
    url: apiUrl+"/getmenu?cat_id="+menuCatValue,
    contentType: "application/json",     
    dataType: "json",
    headers: JSON.parse(localStorage.getItem('customHeader')),
    //data: JSON.stringify(jsonMenuCatValue),
    // beforeSend : function(xhr, opts)
    // {           
    //   if(currentRequest != null) 
    //   {
    //     xhr.abort();
    //   }
    // },
    beforeSend : function(xhr, opts)
      {           
        $("#loader").show();
      },           
    success: function(result) 
    {
      //console.log(result);
      if(result.Status == "200")
      {
        $("#select-custom-24").empty();
      //  console.log(result);
      var options = $('#select-custom-24');
     

      // console.log('options', options)
      for (i=0; i<(result.data.length); i++)
      {        
        //console.log(result.data[i]._id.$oid);
        //console.log(result.data[i].menu_name);
        options.append('<option value="'+ result.data[i]._id +'"> '+result.data[i].menu_name+' </option>').selectmenu( "refresh", true );
      }
      
      }
    },
    error: function(result) 
    {
              alert('error');
    }

  });
}




// get canteen list 
var currentGetCanteenListDataRequest = null;  
function getCanteenListData()
{
  currentGetCanteenListDataRequest = $.ajax({
    type: "GET",
    url: apiUrl+"/getcanteenlist?can_id=",
    contentType: "application/json",     
    dataType: "json",
    headers: JSON.parse(localStorage.getItem('customHeader')),
    //data: JSON.stringify(jsonCantList),
    // beforeSend : function(xhr, opts)
    // {           
    //   if(currentGetCanteenListDataRequest != null) 
    //   {
    //     xhr.abort();
    //   }
    //  // $("#fetchCanteenJson").empty();
    // }, 
    beforeSend : function(xhr, opts)
      {           
        $("#loader").show();
      },                  
    success: function(result) 
    {
      //console.log(result);
      if(result.Status == "200")
      {
       
       //console.log(result);
       //window.location.href = '#showCanteenList' 
       $( "#fetchCanteenJson" ).empty();
       var options = $('#fetchCanteenJson');

      // console.log('options', options)
      for (i=0; i<(result.data.length); i++)
      {        
        //console.log(result.data[i]._id.$oid);
        //console.log(result.data[i].menu_name);
        // options.append('<div data-role="collapsible" > <h2>' +result.data[i].can_name +'</h2> <p> Address: ' +result.data[i].location+'</p> <a class="ui-btn ui-icon-carat-r ui-btn-icon-right"  onclick="canteenTodayMenu('+result.data[i]._id.$oid+')" >Check Today Menu</a> </div>');
        var scpecficCateenId = JSON.stringify(result.data[i]._id).replace(/\"/g,"'");
        var content = '<div data-role="collapsible" > <h2>' +result.data[i].can_name +'</h2> <p> Address: ' +result.data[i].location+'</p> <a class="ui-btn ui-icon-carat-r ui-btn-icon-right"  onclick="openShowTodayMenuPage('+ scpecficCateenId +')" >Check Today Menu</a> </div>';
        // options.append('<div data-role="collapsible" > <h2>' +result.data[i].can_name +'</h2> <p> Address: ' +result.data[i].location+'</p> <a class="ui-btn ui-icon-carat-r ui-btn-icon-right"  onclick="canteenTodayMenu('+ scpecficCateenId +')" >Check Today Menu</a> </div>');
        $( "#fetchCanteenJson" ).append($(content).collapsible()).trigger("create");
      }
      
      }
    },
    error: function(result) 
    {
              alert('error');
    }

  });
  
  console.log('canteen list')
}


// var sessionValue = localStorage.getItem('customHeader');
// var getCurrentPageName = window.location.hash.substr(1);
// var sessionFlag = 'no'
// if(sessionValue != null)
// {
//   sessionFlag = 'yes'

//   // if(getCurrentPageName == 'showCanteenList')
//   // {
//   //  getCanteenListData()
//   //  //alert('333', getCurrentPageName);
//   // }
// // if(getCurrentPageName == 'addTodayMenu')
// // {
// //   getcat()
// //   //alert('333', getCurrentPageName);
// // }

// // if(getCurrentPageName == 'showTodayMenu')
// // {
// //   canteenTodayMenu(scpecficCateenId)
// //   //alert('333', getCurrentPageName);
// // }

  
// }
// else{
//   console.log('sesso empty hain')
// }
// if(sessionFlag == 'yes' && getCurrentPageName == 'showCanteenList')
//   {
//    getCanteenListData()
//    //alert('333', getCurrentPageName);
//   }
// if(sessionFlag == 'yes' && getCurrentPageName == 'addTodayMenu')
// {
//   getcat()
//   //alert('333', getCurrentPageName);
// }
  

//alert( getCurrentPageName );
// var dirName = this.href; 
// alert( dirName );
// var url = window.location.href
// var hash = url.substring(url.indexOf("#")+1)
// alert( hash );
// var whichPageId = $.mobile.activePage.attr( "id" );
// alert( whichPageId );

// yeh code get kar raha hai har hash value without reload
$(document).bind ('pageshow', function (e, data) {
  //console.log ($('#page_spots'));
  //console.log ($.mobile.activePage);
  // getHtmlPageName = $.mobile.activePage.attr('id');
  //if ($.mobile.activePage.attr('id') == 'page_spots') { console.log ('Bingo!'); }
  console.log ($.mobile.activePage.attr('id'));  
  getCurrentPageName = $.mobile.activePage.attr('id');
  var sessionValue = localStorage.getItem('customHeader');
  var sessionFlag = 'no'
  if(sessionValue != null)
  {
    sessionFlag = 'yes'
    if(getCurrentPageName == 'addmenu')
    {
      document.getElementById("headingval").innerHTML = "";
      document.getElementById("headingval").innerHTML = "Add Menu Items";
      var addmenuPage = 'addmenuPage'
      getcatformenu(addmenuPage)
    }
    if(getCurrentPageName == 'addTodayMenu')
    {
      document.getElementById("headingval").innerHTML = "";
      document.getElementById("headingval").innerHTML = "Add Today Menu";
      var addTodayMenuPage = 'addTodayMenuPage'
      getcatformenu(addTodayMenuPage)
    }
    if(getCurrentPageName  == 'showCanteenList')
    {
      
      document.getElementById("headingval").innerHTML = "";
      document.getElementById("headingval").innerHTML = "Canteen List";
      getCanteenListData()
      //alert('333', getCurrentPageName);
    }

    if(getCurrentPageName == 'showTodayMenu')
    {
      document.getElementById("headingval").innerHTML = "";
      document.getElementById("headingval").innerHTML = "Today Menu";
      //var $spCateenId = $('#spCateenId').val();
      var $canteenScpId = localStorage.getItem('canteenScpId');
      // console.log($spCateenId);
      canteenTodayMenu($canteenScpId)
    //alert('333', getCurrentPageName);
    }
    if(getCurrentPageName == 'addmenucat')
    {
      document.getElementById("headingval").innerHTML = "";
      document.getElementById("headingval").innerHTML = "Add Menu Category";
    }
    
  }
  
});
function openShowTodayMenuPage(scpecficCateenId)
{
  // localStorage.removeItem('canteenScpId');
  $("#getTodayMenuContent").empty();
  $("#fetchCanteenJson").empty();
  localStorage.setItem('canteenScpId',scpecficCateenId);
  $("#spCateenId").val (scpecficCateenId);
  window.location.href = '#showTodayMenu'
}
randomNummber = function(){
  return parseInt(Date.now() * Math.random());
}