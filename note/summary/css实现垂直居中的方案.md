#### 是一个div垂直剧中的方案

##### 1. 使用绝对定位和负外边距

* 实现方法是，父级元素有高度，并设置为相对定位。居中的元素必须设置高度，然后top设置为50%,margin-top设置为负的自身高度的一半，如：

  ```css
  .box{
        height: 100%;
        width: 300px;
        background-color: aquamarine;
        position: relative;
      }
      .child{
        height: 100px;
        width: 100px;
        position: absolute;
        top: 50%;
        margin-top: -50px;
        background-color: burlywood;
      }
  ```

* 优点： 兼容性不错

* 缺点： 必须知道居中元素块级元素的高，否则无法垂直居中

##### 2.  使用绝对定位和transform

* 实现方法：父级元素有高度，并设置相对定位，居中元素快不用知道高度，设置绝对定位，top: 50%;transform: translateY(-50%),就是设置往y轴偏移-50%.如：

  ```css
  .box{
        height: 100%;
        width: 300px;
        background-color: aquamarine;
        position: relative;
      }
      .child{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: burlywood;
      }
  ```

* 优点： 不需要知道被居中元素的尺寸，因为transform中偏移的百分比就是相对于元素自身的尺寸而言。当居中的元素是被自己内部元素撑开时可用此方法。

##### 3. flex布局

##### 4. 直接使用padding实现子元素居中

* 此方法不能设置父元素的高度，否则无法实现垂直居中。

##### 5. 绝对定位结合margin：auto

* 实现方式：把要垂直居中的元素相对于父元素绝对定位，top和bottom设置相等的值，然后设置margin:auto 0,就可以实现垂直居中了。

  ```css
  .box{
        height: 100%;
        width: 300px;
        background-color: aquamarine;
        position: relative;
      }
      .child{
        height: 100px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        background-color: burlywood;
      }
  ```

* 被居中的元素可以不设置高度，但是必须是图片这类自身就包含尺寸的元素，否则无法实现。间接的说就是元素块需要设置高度。

