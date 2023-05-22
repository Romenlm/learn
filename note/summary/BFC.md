#### BFC

* 定义： BFC(Block formatting context) 直译为“块级格式化上下文” 。 是一个独立的渲染区，只有block-level box参与，它规定了内部的block-level box如何布局。并且与这个区域外好不相干。

##### Box：css布局的基本单位

* 就是一个页面有多个box组成，元素类型和display属性，决定了这个box的类型，不同的box类型会参与不同的fotmatting context (一个决定如何渲染文档的容器)。因此box内的元素会以不同的方式渲染。

盒子类型有：

* block-level box : display属性为block,list-item,table的元素（以前的理解就是块级元素），会生成block-level box 。并参与block formatting context 
* inline-level box: display属性为inline,inline-block,inline-table的元素（以前的理解就是行内元素），会生成inline-level box，并参与inline formatting context 
* run-in box ： css3中才有

##### Formatting context 

* 是w3c css2.1规范中的一个概念，他是页面中的一块渲染区域，并有一套渲染规则，他决定子元素将如何定位，以及和其他元素的关系和相互作用，最常见的有Block formatting context (简称BFC) 和 inline formatting context(简称IFC)

##### BFC布局规则

​	bfc概念： bfc是一个独立布局，其中元素布局不受外界的影响，并在一个bfc中，块盒与行盒都会垂直的沿着其父元素的边框排列。

布局规则： 

* 内部的box（块盒与行盒）会在垂直方向，一个接一个的放置
* box垂直方向的距离由margin决定，属于同一个bfc的相邻box的margin会发生重叠。
* 每个盒子的margin box的左边，包含块border box 的左边接触
* bfc的区域不会与float box重叠
* bfc就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
* 计算bfc的高度时，浮动元素也计算参与

##### 如何创建BFC

1. float 的是不是none
2. position的值不是static或者relative
3. diaplay的值是inline-block,table-cell,flex,table-caption或者inline-flex
4. overflow的值不是visible

##### BFC的作用

1. 利用BFC避免margin的重叠，设置两个bfc，将元素包裹起来，此时设置元素的margin，分别在连个bfc内部，不会发生重叠
2. 自适应两栏布局，根据每个盒子的margin box的左边，包含块border box 的左边接触和bfc的区域不会与float box重叠，右边的会自动适应宽度，这时就形成了一个两栏自适应的布局
3. 清除浮动。当不给父节点设置高度，子节点设置浮动的时候，会发生高度塌陷，此时需要清除浮动。根据计算bfc的高度时，浮动元素也计算参与，所以设置父元素为bfc即可，（就是添加overflow:hidden）



#### 创建bfc总结

一个块级格式化上下问由以下之一创建

* 根元素或其他包含它的元素
* 浮动元素（元素的float不是none）
* 绝对定位元素（position为absolute或fixed）
* 内联块（元素具有display: inline-block）
* 表格单元格（display：table-cell,html表格单元格默认属性）
* 表格标题（元素具有display:table-caption,html表格标题默认属性）
* 具有overflow,且值不是visible的块元素
* display:flow-root
* column-span:all 应当总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中。