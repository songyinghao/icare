var item={
    drawItemList:function(){
        $(".inf").addClass('hide');
	    $("#itemshow").removeClass('hide');
	    $('#careitempage').datagrid({ 
            title:'专护项目列表', 
            iconCls:'icon-edit',//图标 
            height:270,
            nowrap: false, 
            loadMsg:"正在加载，请稍等...", 
            striped: true, 
            border: true, 
            collapsible:false,//是否可折叠的 
            fit: true,//自动大小 
            url:'/care_item',  
            method:'get',
            remoteSort:false,  
            singleSelect:true,//是否单选 
            pagination:true,//分页控件 
            rownumbers:true,//行号  
            pageNumber:1,
            loadFilter:function(data){
        	   var result={"total":0,"rows":0};
        	   result.total=data.total;
        	   result.rows=data.itemList;
        	   return result;
            },
            toolbar: [{ 
                text: '添加', 
                iconCls: 'icon-add', 
                handler: function() { 
                
                } 
            }, '-',{ 
                text: '删除', 
                iconCls: 'icon-remove', 
                handler: function(){ 
                    //delElderInfo(); 
                }
            }]
        }); 
	    var pager1 = $('#careitempage').datagrid().datagrid('getPager');	// get the pager of datagrid
		pager1.pagination({
			pageSize: 5,//每页显示的记录条数，默认为20 
        	pageList: [5,10,15],//可以设置每页记录条数的列表 
        	beforePageText: '第',//页数文本框前显示的汉字 
        	afterPageText: '页    共 {pages} 页', 
        	displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录', 
        /*onBeforeRefresh:function(){
            $(this).pagination('loading');
            alert('before refresh');
            $(this).pagination('loaded');
        }*/ 
        });
    
    $('#areaitempage').datagrid({ 
        title:'房护项目列表', 
        iconCls:'icon-edit',//图标 
        height:270,
        nowrap: false, 
        loadMsg:"正在加载，请稍等...", 
        striped: true, 
        border: true, 
        collapsible:false,//是否可折叠的 
        fit: true,//自动大小 
        url:'/area_item',  
        method:'get',
        remoteSort:false,  
        singleSelect:true,//是否单选 
        pagination:true,//分页控件 
        rownumbers:true,//行号  
        pageNumber:1,
        loadFilter:function(data){
            var result={"total":0,"rows":0};
            result.total=data.total;
            result.rows=data.itemList;
            return result;
        },
        toolbar: [{ 
            text: '添加', 
            iconCls: 'icon-add', 
            handler: function() { 
                
            } 
        }, '-',{ 
            text: '删除', 
            iconCls: 'icon-remove', 
            handler: function(){ 
                //delElderInfo(); 
            }
        }]
    }); 
    var pager2 = $('#areaitempage').datagrid().datagrid('getPager'); // get the pager of datagrid
        pager2.pagination({
            pageSize: 5,//每页显示的记录条数，默认为20 
            pageList: [5,10,15],//可以设置每页记录条数的列表 
            beforePageText: '第',//页数文本框前显示的汉字 
            afterPageText: '页    共 {pages} 页', 
            displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录', 
        /*onBeforeRefresh:function(){
            $(this).pagination('loading');
            alert('before refresh');
            $(this).pagination('loaded');
        }*/ 

        });    
    },

    onCareDblClickRow:function(index){
                var elder = $('#elderpage').datagrid('getSelected');
                if (!elder) {
                    setTimeout("alert('请先选择老人')",1000);
                    return;
                } else {
                    infoUrl="gero/1/elder/" + elder.id;
                    $.ajax({
        				type: "get",
        				dataType: "json",
        				contentType: "application/json;charset=utf-8",
        				url: infoUrl,
        				success: function (msg) {
                            $("#elder-dialog-form").dialog("open");
                            // $("#elder-dialog-form").dialog("center");
                            // $("#elder-Info-card-a ul li text").text("xxx");
        				},
        				error: function(e) {
            				alert(e);
        				}
    				});
                }
    },

    onAreaDblClickRow:function(index){
                var elder = $('#elderpage').datagrid('getSelected');
                if (!elder) {
                    setTimeout("alert('请先选择老人')",1000);
                    return;
                } else {
                    infoUrl="gero/1/elder/" + elder.id;
                    $.ajax({
                        type: "get",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        url: infoUrl,
                        success: function (msg) {
                            $("#elder-dialog-form").dialog("open");
                            // $("#elder-dialog-form").dialog("center");
                            // $("#elder-Info-card-a ul li text").text("xxx");
                        },
                        error: function(e) {
                            alert(e);
                        }
                    });
                }
    }

}
