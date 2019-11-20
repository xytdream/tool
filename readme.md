## tool使用方法

直接将这个ji文件引入你的html文档,具体路径取决于你将这个文件放置的位置，这里我假设把它放在当前项目的js文件夹下

```html
<script src="./js/tool.js"></script>
```

如果你想在其他js文件中引用这个里面的函数，你只需要在对应的html文档中将上面这条代码放在你引入其他js文件前面就可以了，这是因为浏览器的加载顺序是从上至下的。下面介绍引入之后这些方法具体怎么调用



### getStyle()

这个方法是用来兼容IE8及以下浏览器的获取元素样式的方法

参数：

 	\* obj: 获取样式的对象

​	 \* name： 获取样式的样式名

调用方法：直接调用即可

```javascript
getStyle(obj,name)
```

------

### move()

一个用来和执行移动动画效果的方法，也可以用来改变元素的宽高

参数：

​	 \* 1.obj: 动画执行的对象

​	 \* 2.attr: 执行动画的样式 (可选值：top / left / width / height)

​				top: 上下移动

​				left: 左右移动

​				width: 改变宽度

​				height: 改变高度

 	\* 3.target: 动画执行的目标位置

​	 \* 4.speed: 移动速度

​	 \* 5.callback: 回调函数，在动画执行完毕后执行（该参数可传可不传）

调用方法：

​	调用该方法的元素一定要开启绝对定位，在该元素的样式中添加上“ position: absolute;”，在其移动的容器元素上开启相对定位 “ position: relative;”，然后直接调用该方法即可。

```javascript
//无回调函数
move(obj, attr, target, speed)

//有回调函数
move(obj, attr, target, speed , callback)
```

------

