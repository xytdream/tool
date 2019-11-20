/**
 * 兼容IE8及以下浏览器的获取元素样式的方法
 * 
 * 参数：
 *  obj: 获取样式的对象
 *  name： 获取样式的样式名
 */
function getStyle(obj,name){
    if(window.getComputedStyle){
        // return getComputedStyle(obj,null)[name]
        //在新版中，已经抛弃了伪类元素的使用，所以可以不用写第二个参数null
        return getComputedStyle(obj)[name]
    }else{
        return obj.currentStyle[name]
    }
}

//创建一个用来和执行移动动画效果的函数
/**
 * 参数：
 *  1.obj:动画执行的对象
 *  2.attr:执行动画的样式 
 *  3.target:动画执行的目标位置
 *  4.speed:移动速度
 *  5.callback: 回调函数，在动画执行完毕后执行（该参数可传可不传）
 */
function move(obj , attr , target , speed , callback){
    //关闭上一个开启的定时器
    clearInterval(obj.timer)

    //获取对象执行动画样式的当前值
    var current = parseInt(getStyle(obj,attr))
    // 判断speed的正负值
    if(target < current){
        speed = -speed;
    }

    // 开启一个定时器，用来执行动画效果
    //给执行动画对象obj添加一个timer属性，用来保存它自己的定时器标识。避免不同的元素共用一个定时器标识
    obj.timer = setInterval(function(){
        //获取对象执行动画样式的当前值
        var oldValue = parseInt(getStyle(obj,attr))
        
        //在旧值的基础上生成一个新值
        var newValue = oldValue + speed;
        
        if( (speed > 0 && newValue >= target) || (speed < 0 && newValue <= target) ){
            newValue = target;
        }

        //将新值赋值给box1的left
        obj.style[attr] = newValue + "px";

        if(newValue == target){
            //到达目标位置，关闭当前定时器
            clearInterval(obj.timer);

            //调用回调函数
            callback && callback();
        }
    },30)   
}


// 该函数用于向一个元素中添加指定的class属性
/*
*参数：
*   obj: 要添加class属性的元素对象
*   cName: 要添加的class值
*/ 
function addClass(obj,cName){
    //判断元素是否已有指定的class属性值，没有则添加，有则不变
    if(!hasClass(obj,cName)){
        obj.className += " " + cName;
    }   
}

// 该函数用于判断一个元素中是否含有指定的class属性值
/*
*参数：
*   obj: 要判断class属性的元素对象
*   cName: 要判断的class属性值
*/ 
function hasClass(obj,cName){
    //创建一个正则表达式
    var reg = new RegExp("\\b"+cName+"\\b")

    return reg.test(obj.className)
}

// 该函数用于移除元素中指定的class属性值
/*
*参数：
*   obj: 要移除class属性的元素对象
*   cName: 要移除的class属性值
*/ 
function removeClass(obj,cName){
    //创建一个正则表达式
    var reg = new RegExp("\\b"+cName+"\\b")
    //将指定的属性值替换成空串即可达到移除效果
    obj.className = obj.className.replace(reg , "")
}

// 该函数用于切换元素中指定的class属性值，有则移除，无则添加
/*
*参数：
*   obj: 要切换class属性的元素对象
*   cName: 要切换的class属性值
*/ 
function toggleClass(obj,cName){
    //判断是否有该class
    if(hasClass(obj,cName)){
        //有，移除
        removeClass(obj,cName)
    }else{
        //无，添加
        addClass(obj,cName)
    }
}