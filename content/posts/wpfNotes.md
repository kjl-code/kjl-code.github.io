---
title: "WPF零基础教程"
date: 2026-08-27
tags: ["C#",".NET基础"]
draft: false # false代表正式发布；true草稿不会上线
---

## WPF零基础教程｜阶段一 第1课

> 🎯本节课知识点：WPF是什么、和WinForm的区别、适合用来开发什么项目 ✅目标：只建立概念认知，**本节课不用写任何代码** 📌先约定：所有陌生专业名词，我都会先用大白话翻译一遍

### 前置铺垫：什么叫「桌面软件」

桌面软件 = 安装在你的 Windows 电脑上，双击图标就能打开运行的程序。 例子：网易云音乐、微信电脑版、记事本、视频剪辑工具。

我们用C#可以写2种最常见的程序：

1. 控制台程序：黑框窗口，只能输出文字，**没有好看的图形按钮界面**
2. 桌面GUI程序：有窗口、按钮、输入框、图片，你可以用鼠标点击操作，GUI就是「看得见的图形界面」

------

### 一、WPF是什么？

WPF 全称：**Windows Presentation Foundation** 大白话翻译：微软给C#开发者提供的一套**制作Windows桌面图形界面的工具**。

#### 核心要点（小白版）

1. 只能开发运行在 Windows（Win10、Win11）电脑上的软件，不能做手机APP、网页网站。

2. 开发语言：背后干活的代码用 **C#**；画界面的代码用一种全新语言叫 **XAML**（本节课先记住名字就行，下下节课详细学）

3. 最大特点：

   界面和业务代码可以分开写

   。

   - 界面：按钮长什么样、颜色、位置 → 交给XAML负责
   - 功能：点按钮之后弹出文字、读取文件、计算数据 → 交给C#代码负责

> 📖生活化比喻 开发软件好比做一张海报：

- XAML（界面代码）= 画图软件，用来摆放文字、按钮、图片，决定海报长什么样。
- C#（后台代码）= 幕后工作人员，实现功能：点击按钮之后要干什么事。

------

### 二、WPF 和 WinForms 的区别

> 先解释 WinForms：它也是微软老一代、做Windows桌面软件的工具，同样用C#开发。很多年前大家都用它写桌面程序。

| 对比项     | WinForms（老工具）                                           | WPF（新工具）                                      |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------- |
| 画图方式   | 传统模式，控件位置是固定坐标，像贴贴纸，按钮拖到哪里就钉死在哪里 | **矢量绘图**，界面可以随便缩放放大不会模糊         |
| 界面和代码 | 界面、功能代码高度绑在一起，很难拆分                         | 天生设计成界面代码 和 功能代码互相分离             |
| 美化难度   | 想要做出炫酷动画、渐变、圆角，代码非常麻烦，效果差           | 原生自带动画、渐变、圆角、3D效果，美化界面非常轻松 |
| 分辨率适配 | 窗口拉大的时候，里面按钮文字不会自动跟着调整位置，容易布局错乱 | 自带强大布局系统，窗口放大缩小，控件自动适配位置   |

#### 最简单一句话总结区别

- WinForms：适合快速做一个**简单、样式朴素、不需要美化**的工具软件。
- WPF：适合做**界面好看、动画多、窗口大小经常变化**的桌面软件。

> ⚠️重要提醒：我们整套课程**不会学习WinForms**，你完全不需要懂WinForms也能学好WPF。

------

### 三、WPF适合用来做什么项目？

#### ✅推荐用WPF开发

1. 企业内部管理工具：仓库管理、进销存、员工信息查询软件
2. 电脑客户端工具：文件批量处理、数据导出工具、串口调试上位机（硬件配套电脑软件）
3. 需要精美UI、动画效果的桌面客户端
4. 窗口大小会被用户自由缩放的软件

#### ❌不适合用WPF开发

1. 手机APP、网页网站（WPF根本跑不起来）
2. 需要同时在Windows、Mac、Linux多系统运行的软件（WPF只支持Windows）

------

### 📚本节课小结

1. WPF是微软C#生态里，用来开发Windows桌面图形软件的框架
2. WPF有两套代码分工：XAML画界面，C#写功能逻辑
3. 对比老工具WinForms，WPF美化能力、自适应布局能力更强
4. WPF只能运行在Windows电脑上

------

### 📝课后练习任务（无代码，动脑即可）

请你在纸上/记事本回答2个小问题：

1. 举出2个你电脑上的「桌面软件」例子
2. 简单说一说：如果你要开发一个「窗口可以放大缩小，界面按钮自动跟着调整位置」的工具，你选WPF还是WinForms？

做完练习之后，你就可以开启**阶段一‑第2课：新建第一个WPF项目，认识解决方案里所有文件**。 如果你有任何地方听不懂，可以随时告诉我，我换例子重新讲解。

## WPF零基础教程｜阶段一 第2课

> 🎯本节课知识点：新建第一个WPF项目 + 认识解决方案里面每一个文件 ✅前置：打开 Visual Studio（推荐2022版本），安装时勾选「.NET 桌面开发」 workload ⚠️本节课目标：成功跑起来一个空白窗口，看懂每一个文件是干什么的，**暂时不修改任何代码**

### 一、新建WPF项目步骤（一步一步照着点）

1. 打开 Visual Studio

2. 点击【创建新项目】

3. 在模板列表找到 

   WPF 应用(.NET)

   > 不要选「WPF 应用(.NET Framework)」，优先选 .NET 6 / .NET 7 / .NET 8，新版

4. 点击【下一步】

5. 项目名称：可以填 `HelloWpf`

6. 位置：选一个你好找的文件夹，不要放在C盘很深、带中文的路径

7. 解决方案名称：默认和项目名一样就行

8. 【创建】

等待生成完成，你右边「解决方案资源管理器」就会看到一堆文件。

> 💡大白话名词解释 **解决方案(Solution)**：一个大容器，可以放好多个项目。 **项目(Project)**：就是你当前正在写的这个桌面软件。

------

### 二、解决方案资源管理器文件讲解（从上到下）

新建完一个纯净的WPF项目，默认生成这些核心文件：

```
解决方案 'HelloWpf' (1个项目)
└── HelloWpf
    ├── App.xaml
    ├── App.xaml.cs
    ├── MainWindow.xaml
    ├── MainWindow.xaml.cs
    └── HelloWpf.csproj
```

下面一个一个讲，全部用大白话。

#### 1. HelloWpf.csproj

**作用：项目配置文件** 大白话：这个文件记录了你这个软件的全部设置。 比如：

- 你的软件目标运行在哪个 .NET 版本

- 这个项目引用了哪些额外的工具包

- 哪些图片、资源文件要打包进程序里面

  > 小白阶段：**平时几乎不用点开修改它**。

------

#### 2. App.xaml

> 后缀 `.xaml` = 界面描述文件（画界面用的代码文件）

**作用：整个应用程序的全局入口、全局设置文件** 大白话： 你运行软件，最先启动的不是 MainWindow（主窗口），而是 `App.xaml`。 它管的事情：

1. 设置软件启动的时候，**第一个弹出哪个窗口**（默认就是 MainWindow）
2. 定义整个软件所有窗口都能用的全局样式、颜色、字体
3. 监听整个程序生命周期事件：软件启动、软件关闭

##### 配套文件：App.xaml.cs

凡是文件名是 `xxx.xaml`，几乎一定附带一个 `xxx.xaml.cs` 文件。 `.cs` 就是C#后台代码文件。

- `App.xaml`：管界面、全局资源
- `App.xaml.cs`：给 App 写后台C#逻辑，比如软件一启动就加载一些数据。

> 👉配对规则（非常重要，记住这个规律！） `A.xaml` ↔ `A.xaml.cs` xaml = 界面图纸 xaml.cs = 图纸背后干活的C#代码

------

#### 3. MainWindow.xaml

**作用：你的主窗口界面文件** 大白话：就是你打开软件第一眼看到的那个窗口。 这个文件里面，你写XAML代码，摆放按钮、文字、输入框，决定窗口长什么样子。

#### 4. MainWindow.xaml.cs

**MainWindow 的后台C#代码文件** 和 MainWindow.xaml 是一对搭档！

- MainWindow.xaml：画按钮、摆位置

- MainWindow.xaml.cs：写点击按钮之后要干什么的C#代码

  > 这种「xaml + xaml.cs」的写法，专业名字叫 **Code‑Behind（后台代码模式）** 本节课先记住这个名词，后面第6课专门练习它。

------

### 三、现在运行你的第一个WPF程序

顶部工具栏，找到绿色三角形按钮「启动」▶️，点击它。

你会弹出一个空白的白色小窗口！ ✅成功！你已经运行起来你的第一个WPF桌面软件。 这个窗口现在里面空空如也，因为我们还没有在 MainWindow.xaml 里面添加按钮、文字。

> 📌思考：空白窗口哪里来的？ App.xaml 告诉程序：启动的时候打开 MainWindow，然后 MainWindow 就弹出来了。

------

## 四、XAML 文件长什么样，简单预览一下

双击打开 `MainWindow.xaml` 你会看到里面默认自带的代码，完整初始代码如下：

```
<Window x:Class="HelloWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="450" Width="800">
    <Grid>

    </Grid>
</Window>
```

逐行简单讲解（不用背，先眼熟）

1. `<Window`：代表这是一个窗口，Window就是窗口控件
2. `x:Class="HelloWpf.MainWindow"`：绑定关系！告诉这个窗口，它对应的后台C#代码类就是 MainWindow.xaml.cs，也就是把界面文件和后台文件拴在一起。
3. `xmlns=...`：导入WPF自带工具库，小白阶段固定复制，不用修改。
4. `Title="MainWindow"`：窗口标题栏上显示的文字
5. `Height="450" Width="800"`：窗口默认打开时的高度、宽度
6. `<Grid> </Grid>`：窗口内部，用来放按钮文字的布局容器。Grid是空的，所以窗口现在一片空白。

------

## 📚本节课核心小结

1. 一对搭档规则：`xxx.xaml`（界面图纸） + `xxx.xaml.cs`（后台C#干活代码）
2. App.xaml：程序全局入口，决定最先弹出哪个窗口
3. MainWindow.xaml / MainWindow.xaml.cs：主窗口的界面和后台代码
4. .csproj：项目配置文件，小白很少修改
5. 点击绿色启动按钮 ▶️ 就能运行WPF软件

------

## 📝课后练习任务

1. 新建一个名为 `MyFirstWpf` 的WPF项目
2. 成功运行，弹出空白窗口
3. 尝试修改 MainWindow.xaml 里面的 `Title="MainWindow"`，改成 `Title="我的第一个WPF窗口"`，再点启动，观察窗口标题文字的变化。

> 做完练习之后就可以进入：**第3课 XAML基础语法，标签、属性，XAML和cs后台代码的关系**。 哪里听不懂随时说，我换简单例子重讲。

# WPF零基础教程｜阶段一 第3课

> 🎯本节课知识点：XAML基础语法、标签、属性、XAML 和后台cs代码的关系 ✅前置要求：已经可以新建并运行WPF项目 ⚠️本节课目标：看得懂XAML代码，明白界面代码和C#代码怎么关联，**不涉及复杂控件**

## 一、大白话先搞懂：什么是 XAML

XAML 就是一种**专门用来画界面的标记语言**。 你可以把它理解成一份「装修图纸」： 图纸（XAML）只描述：房间多大、墙上放什么按钮、文字写什么、颜色。 但是图纸**不会干活**。 真正点击按钮后执行计算、读取文件、弹出消息这类干活的逻辑，交给 C#（`.xaml.cs`）后台代码。

> 记住一条铁律： **XAML = 长什么样；C#后台 = 干什么事**

------

## 二、XAML最基础：标签（元素）

打开你的 `MainWindow.xaml`，你第一行就能看到：

```
<Window>

</Window>
```

- `<Window>`：**开始标签**
- `</Window>`：**结束标签**
- 从 `<Window>` 一直到 `</Window>` 整体，叫做一个**元素 / 标签**。

Window 代表「窗口」这个东西。

> 所有你放到窗口上的按钮、文字、输入框，全部都是标签。

### 两种标签写法

#### 写法1：开始标签 + 结束标签（中间可以放内容）

```
<TextBlock>你好WPF</TextBlock>
```

`<TextBlock>` 开始 `你好WPF` 标签里面的内容 `</TextBlock>` 结束

#### 写法2：自闭合标签（里面不放任何东西）

```
<Button Content="点击我" />
```

末尾的 `/` 就代表结束，不用再单独写 `</Button>`。

> 💡小白口诀：中间要放别的控件，就分开写；不放子控件，可以自闭合。

------

## 三、什么是「属性」

属性 = 给这个标签设置各种各样的特征。 举个例子：

```
<Window Title="我的窗口" Width="800" Height="450">
```

- `Title="我的窗口"`：属性，代表窗口标题文字
- `Width="800"`：属性，窗口宽度
- `Height="450"`：属性，窗口高度

格式固定： `属性名="属性值"` ⚠️ 值**必须用英文双引号**包起来！不能用中文引号。

> 生活化类比： 人（标签），有属性：姓名="张三"，年龄="20" 窗口（标签），有属性：标题="我的窗口"，宽度="800"

### 动手修改一段代码

把你的 MainWindow.xaml 改成下面完整代码：

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="我的第一个窗口" 
        Height="450" 
        Width="800">
    <Grid>
        <TextBlock Text="大家好，我是文字" FontSize="30"/>
    </Grid>
</Window>
```

### 逐行讲解新增部分

1. ```
   <TextBlock Text="大家好，我是文字" FontSize="30"/>
   ```

   - `TextBlock`：用来显示一段文字的控件标签
   - `Text="大家好，我是文字"`：文字内容属性
   - `FontSize="30"`：字体大小属性

点击运行▶️，窗口就会显示出一行大字。

------

## 四、嵌套标签（非常重要）

XAML标签可以一层套一层。

```
<Window>
    <Grid>
        <TextBlock Text="嵌套示例"/>
    </Grid>
</Window>
```

关系解读： Window里面装着Grid；Grid里面装着TextBlock。

> 注意！一个窗口内，Grid是第一层容器，所有按钮文字都要写在Grid里面。如果你写到Grid外面，程序直接报错跑不起来。

❌错误示范（千万别这么写）

```
<Window>
    <TextBlock Text="我放错位置了"/>
    <Grid>
        
    </Grid>
</Window>
```

这个代码运行就报错！控件必须放在布局容器里面。

------

## 五、XAML 和后台 .cs 文件到底是什么关系

还记得这一行代码吗：

```
x:Class="MyFirstWpf.MainWindow"
```

👉这一行就是**绑定纽带**！ 大白话翻译： 这份XAML图纸，对应的干活C#代码类就是 `MainWindow.xaml.cs`。

打开 `MainWindow.xaml.cs`，你会看到类似这样代码：

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }
}
```

逐行讲解后台代码每一行：

1. `namespace MyFirstWpf`：命名空间，相当于文件夹，和你项目名字一致

2. ```
   public partial class MainWindow
   ```

   - `partial` 关键字！**分部类** 大白话：`MainWindow`这个C#类，被拆成了两半。一半在XAML里面，一半在这个cs文件里面，两个合起来才是完整窗口。

3. `: Window`：代表这个类继承窗口，所以它是一个窗口

4. `public MainWindow()`：构造函数。**窗口被创建出来的时候，第一时间就会执行这里面的代码**

5. ```
   InitializeComponent();
   ```

   > ⚠️超级重要！ 这句话的作用：加载、解析你写的MainWindow.xaml界面图纸。 删掉这一行，你的界面就消失了，窗口一片空白。

### 两者分工总结

| 文件                       | 能干什么                             | 不能干什么                                           |
| -------------------------- | ------------------------------------ | ---------------------------------------------------- |
| MainWindow.xaml(XAML)      | 摆放按钮，设置颜色、大小、文字、布局 | 不能写判断、循环、计算等业务逻辑                     |
| MainWindow.xaml.cs(C#后台) | 写点击按钮后的逻辑，数据计算         | 一般不在这里手动拖放控件（后面MVVM阶段会进一步分离） |

> 当前这种模式名称：Code‑Behind（后台代码模式），界面图纸和后台代码绑定在一起。

------

## 六、演示：后台代码动态修改界面文字

现在我们先提前感受一下后台代码操控界面，先有一个直观印象。

第一步：XAML代码

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="XAML演示" Height="450" Width="800">
    <Grid>
        <TextBlock x:Name="MyText" Text="初始文字" FontSize="30"/>
    </Grid>
</Window>
```

新知识点：`x:Name="MyText"` 大白话：给这个文字控件起一个名字！有了名字之后，C#后台代码就能找到它，操控它。

第二步：打开 MainWindow.xaml.cs，修改构造函数：

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            // 窗口初始化完成后，后台代码修改文字
            MyText.Text = "文字被C#后台改掉啦！";
        }
    }
}
```

运行！你会发现窗口显示的不再是「初始文字」，而是后台修改后的文字。

原理：

1. XAML给控件起名 `MyText`
2. 后台代码通过这个名字找到控件
3. 修改它的Text属性

> 本节课只是演示效果，按钮点击事件我们留到第6课详细学习。

------

## 📚本节课小结

1. XAML是画界面的语言，由开始标签、结束标签、属性组成；格式：`属性名="值"`
2. 标签可以互相嵌套；所有可见控件，必须放到布局容器（Grid）里面
3. `x:Class` 绑定XAML界面文件和cs后台文件
4. `partial` 分部类：窗口类被拆成XAML一半 + cs一半
5. `InitializeComponent()` 加载解析XAML界面，必不可少
6. `x:Name`：给控件起名字，后台C#就能找到它，修改它

------

## 📝课后练习任务

1. 在Grid里面添加一个TextBlock，设置文字内容为「课后练习」，字体大小25
2. 给这个TextBlock设置 `x:Name="ShowText"`
3. 在MainWindow构造函数 `InitializeComponent();` 的下面，写一行后台代码修改ShowText的文字为「我完成了练习」
4. 运行项目，确认文字被后台成功修改

练习完成后，就进入 **第4课：最常用基础控件讲解：Button、TextBlock、TextBox、Label**。 有任何地方听不懂随时提出来，我换例子重讲。





# WPF零基础教程｜阶段一 第4课

> 🎯本节课知识点：4个最常用基础控件：Button、TextBlock、TextBox、Label ✅前置：已经掌握XAML标签、属性、`x:Name`、XAML‑CS后台关系 ⚠️本节课目标：认识4个控件各自用途、常用属性，写出能运行的示例，**暂时不学点击事件**（事件放到第6课）

## 一、什么是「控件」？大白话解释

控件 = 窗口上一个个可以看见、可以交互的零件。 按钮、文字、输入框，全部都是控件。 本节课学习4个入门必学控件：

| 控件名称  | 中文名字 | 作用                                                  |
| --------- | -------- | ----------------------------------------------------- |
| TextBlock | 文本块   | **展示文字，用户不能修改**                            |
| Label     | 标签     | 展示文字，自带边框/焦点相关特性，适合做标题、提示文字 |
| TextBox   | 文本框   | **让用户打字输入文字**                                |
| Button    | 按钮     | 鼠标可以点击的按键                                    |

> 💡先分清最容易混淆一对：`TextBlock` vs `Label` TextBlock：单纯显示文字，轻量； Label：适合给旁边输入框做文字提示。初学很多场景两者效果看起来差不多。

------

## 二、完整可运行示例代码

把你的 `MainWindow.xaml` 全部替换为下面代码：

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="第4课 基础控件演示" 
        Height="450" 
        Width="800">
    <Grid>
        <!-- 1. TextBlock：显示文字 -->
        <TextBlock x:Name="txtShow" 
                   Text="我是TextBlock，只用来展示文字" 
                   FontSize="22"
                   Margin="20,20,0,0"/>

        <!-- 2. Label：提示文字 -->
        <Label x:Name="lblTip" 
               Content="我是Label，提示文字" 
               FontSize="22"
               Margin="20,60,0,0"/>

        <!-- 3. TextBox：用户输入框 -->
        <TextBox x:Name="txtInput" 
                 Text="这里可以打字"
                 FontSize="22"
                 Width="400"
                 Margin="20,100,0,0"/>

        <!-- 4. Button：按钮 -->
        <Button x:Name="btnOk" 
                Content="点我按钮" 
                FontSize="22"
                Width="150"
                Height="50"
                Margin="20,150,0,0"/>
    </Grid>
</Window>
```

> 小知识点：`Margin="左,上,右,下"`，控制控件距离容器四条边有多远，用来移动控件位置。

### 逐行讲解每一个控件

#### 1. TextBlock

```
<TextBlock x:Name="txtShow" 
           Text="我是TextBlock，只用来展示文字" 
           FontSize="22"
           Margin="20,20,0,0"/>
```

- `Text` 属性：存放要显示的文字
- `FontSize`：字体大小
- `x:Name="txtShow"`：起名字，后台C#代码可以找到它
- 用户**不能直接在窗口上修改这段文字**，只能程序去改

#### 2. Label

```
<Label x:Name="lblTip" 
       Content="我是Label，提示文字" 
       FontSize="22"
       Margin="20,60,0,0"/>
```

> ⚠️一个非常关键区别！

- TextBlock 使用 **Text** 属性放文字
- Label、Button 使用 **Content** 属性放文字！！！

> 新手高频踩坑点： ❌ `<Button Text="点击">` 错误！！按钮没有Text属性 ✅ `<Button Content="点击">` 正确

#### 3. TextBox（输入框）

```
<TextBox x:Name="txtInput" 
         Text="这里可以打字"
         FontSize="22"
         Width="400"
         Margin="20,100,0,0"/>
```

- `Text`：输入框里面的文字。**用户可以用键盘修改它**
- `Width`：控件宽度

#### 4. Button（按钮）

```
<Button x:Name="btnOk" 
        Content="点我按钮" 
        FontSize="22"
        Width="150"
        Height="50"
        Margin="20,150,0,0"/>
```

- `Content`：按钮上面显示的文字
- `Height`：控件高度

> 现在你点按钮，什么都不会发生。因为我们还没有给按钮挂上Click点击事件，第6课才学。

------

## 三、后台C#代码读取、修改控件内容演示

打开 `MainWindow.xaml.cs`，修改代码：

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            // 后台修改 TextBlock 的文字
            txtShow.Text = "后台代码修改了TextBlock";

            // 后台修改 Label 的文字
            lblTip.Content = "后台修改了Label";

            // 后台修改输入框文字
            txtInput.Text = "输入框文字被后台改写";

            // 后台修改按钮文字
            btnOk.Content = "按钮文字被改了";
        }
    }
}
```

运行程序，你就会看到所有控件文字都被C#后台改掉。

### 重点再记一遍属性区别表

| 控件      | 放文字用哪个属性 | 用户能否编辑文字 |
| --------- | ---------------- | ---------------- |
| TextBlock | Text             | ❌不能            |
| TextBox   | Text             | ✅可以打字修改    |
| Label     | Content          | ❌不能            |
| Button    | Content          | ❌不能            |

> 这是WPF新手第一大坑，一定要区分开！

------

## 📚本节课小结

1. TextBlock：展示文字，属性 Text，用户不可编辑
2. Label：提示文字，属性 Content
3. TextBox：输入框，用户打字，属性 Text
4. Button：按钮，属性 Content，点击触发功能（下下节课实现）
5. Margin="左,上,右,下" 用来调整控件位置
6. 通过 `x:Name`，后台代码就可以读取、修改控件上的文字

------

## 📝课后练习任务

新建或者在当前项目修改代码，完成下面要求：

1. 添加一个 TextBlock，文字："账号："，字体20，距离上边距20
2. 添加一个 TextBox，`x:Name="txtAccount"`，宽度300，距离上边距 60
3. 添加一个 Label，文字："密码："，字体20，距离上边距 110
4. 添加一个 TextBox，`x:Name="txtPwd"`，宽度300，距离上边距 150
5. 添加一个 Button，`x:Name="btnLogin"`，Content="登录"，宽120，高45，上边距 200
6. 在窗口构造函数里面，后台代码给 txtAccount 默认赋值 "zhangsan"
7. 运行，查看效果

做完练习，就开启 **第5课：布局容器入门：Grid、StackPanel、DockPanel**。 哪里没听懂随时告诉我。

# WPF零基础教程｜阶段一 第5课

> 🎯本节课知识点：三大布局容器 Grid、StackPanel、DockPanel ✅前置：已经学会基础控件 Button、TextBlock、TextBox、Label，知道 Margin ⚠️本节课核心目标：搞懂**布局容器是干什么的**，三个容器各自特点，每个都给完整可运行代码，对比它们之间的区别 先不学复杂事件、绑定

## 一、大白话讲解：什么是布局容器

你窗口上所有按钮、文字、输入框，**不能直接丢在Window下面**，必须放到一个「盒子」里面。 这个盒子，就叫**布局容器**。

布局容器作用： 决定盒子里面一堆控件怎么摆放：横向排成一排？竖向一竖列？分成几行几列？贴在上边/下边/左边/右边？

> 比喻： Window = 一间大房子 Grid / StackPanel / DockPanel = 房子里面不同款式的收纳盒 Button、TextBox = 收纳盒里面放的小物件

WPF有一条硬性规则：

> Window 的直接子元素**只能有一个**，那一个元素就是布局容器。 所有按钮文字全部写在容器里面。

------

### 1、第一个容器：Grid（网格容器）

Grid = 网格，可以把窗口切分成 **多行多列**，像Excel表格一样。

- 控件可以放在任意格子里
- 最灵活、最常用的容器，新建项目默认给你的容器就是Grid

#### 关键知识点

- `RowDefinitions`：定义一行或者多行
- `ColumnDefinitions`：定义一列或者多列
- 附加属性（特殊属性）： `Grid.Row="0"` → 放到第0行（行号从0开始数，不是1） `Grid.Column="0"` → 放到第0列

> 附加属性大白话：这个属性不是控件自己天生带的，是父容器Grid给它加上去的。

#### 完整可运行示例代码‑Grid

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Grid网格演示" Height="450" Width="800">
    <Grid>
        <!-- 定义2行 -->
        <Grid.RowDefinitions>
            <RowDefinition Height="100"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>

        <!-- 定义2列 -->
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="200"/>
            <ColumnDefinition Width="*"/>
        </Grid.ColumnDefinitions>

        <!-- 第0行，第0列 -->
        <Button Content="按钮(0,0)" Grid.Row="0" Grid.Column="0" FontSize="20"/>
        <!-- 第0行，第1列 -->
        <Button Content="按钮(0,1)" Grid.Row="0" Grid.Column="1" FontSize="20"/>
        <!-- 第1行，第0列 -->
        <Button Content="按钮(1,0)" Grid.Row="1" Grid.Column="0" FontSize="20"/>
        <!-- 第1行，第1列 -->
        <Button Content="按钮(1,1)" Grid.Row="1" Grid.Column="1" FontSize="20"/>
    </Grid>
</Window>
```

#### 逐行讲解Grid里面新知识点

1. `<Grid.RowDefinitions>`：开始定义所有行
2. `<RowDefinition Height="100"/>`：第0行高度固定100像素
3. `<RowDefinition Height="*"/>`：`*` = 剩余所有空间，窗口剩下多大，这一行就占多大
4. `<ColumnDefinition Width="200"/>`：第0列宽度固定200像素
5. `<ColumnDefinition Width="*"/>`：第1列占据剩下全部宽度
6. `Grid.Row="0"`：告诉按钮：你放在Grid里面第0行
7. `Grid.Column="1"`：告诉按钮：你放在Grid里面第1列

> 行号、列号从 0 开始计数！0是第一行。

Grid适合场景：

- 表单页面（账号密码登录框）
- 需要划分成表格、区块的界面
- 自由划分窗口区域

------

### 2、第二个容器：StackPanel（堆叠面板）

StackPanel：**自动排队摆放控件**，一行一行竖向堆起来，或者一排横向排开。

> 默认方向：**垂直竖向从上往下堆**

属性： `Orientation="Vertical"` 竖向堆叠（默认，不写也是竖向） `Orientation="Horizontal"` 横向从左往右排成一排

#### 示例1：竖向 StackPanel

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="StackPanel竖向" Height="450" Width="800">
    <StackPanel Orientation="Vertical">
        <Button Content="按钮1" FontSize="20" Height="60"/>
        <Button Content="按钮2" FontSize="20" Height="60"/>
        <Button Content="按钮3" FontSize="20" Height="60"/>
        <TextBlock Text="我是文字" FontSize="20" Margin="10"/>
    </StackPanel>
</Window>
```

运行效果：控件从上到下，一个挨着一个垂直排队。

#### 示例2：横向 StackPanel

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="StackPanel横向" Height="450" Width="800">
    <StackPanel Orientation="Horizontal">
        <Button Content="按钮1" FontSize="20" Width="120"/>
        <Button Content="按钮2" FontSize="20" Width="120"/>
        <Button Content="按钮3" FontSize="20" Width="120"/>
    </StackPanel>
</Window>
```

运行效果：控件从左到右排成一条水平线。

StackPanel适合场景：

- 控件只需要整齐排成一列、或者一排
- 菜单、按钮条、竖向表单

> ⚠️StackPanel坑点：**它不会自动换行**。横向排列时，如果控件总宽度超出窗口，多余按钮直接看不见，不会自动跳到下一行。

------

### 3、第三个容器：DockPanel（停靠面板） 

DockPanel：把控件贴在窗口的：上、下、左、右、中间。 附加属性：`DockPanel.Dock="Top"`

可选值：

- `Top`：停靠在顶部
- `Bottom`：停靠在底部
- `Left`：停靠左边
- `Right`：停靠右边
- **最后一个子控件，默认自动填满剩下中间全部区域，不需要写Dock属性！**

#### DockPanel完整示例代码

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="DockPanel停靠演示" Height="450" Width="800">
    <DockPanel>
        <Button Content="顶部" DockPanel.Dock="Top" Height="60" FontSize="20"/>
        <Button Content="底部" DockPanel.Dock="Bottom" Height="60" FontSize="20"/>
        <Button Content="左边" DockPanel.Dock="Left" Width="100" FontSize="20"/>
        <Button Content="右边" DockPanel.Dock="Right" Width="100" FontSize="20"/>
        <!-- 最后一个控件，自动占满剩下中间区域 -->
        <TextBlock Text="中间内容区" FontSize="30" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </DockPanel>
</Window>
```

逐行讲解：

1. `<DockPanel>` 停靠容器
2. `DockPanel.Dock="Top"`：按钮贴到容器顶部
3. 顶部、底部占满整条宽度；左边、右边占剩余区域整条高度
4. 最后那个TextBlock没有写DockPanel.Dock，自动填充剩下中间一大块空间

DockPanel适合场景： 经典软件布局：顶部菜单栏、底部状态栏、左侧导航栏、右边工具栏，中间放主内容。

------

### 三大容器对比总结表（务必记住）

| 容器           | 摆放规则                          | 适合场景                     |
| -------------- | --------------------------------- | ---------------------------- |
| Grid网格       | 分成多行多列，控件放到指定格子    | 登录表单、复杂页面，最万能   |
| StackPanel堆叠 | 横向一排 / 竖向一列排队，依次摆放 | 整齐一列按钮、一行按钮       |
| DockPanel停靠  | 贴在上/下/左/右，最后一个填充中间 | 顶部菜单+左侧导航+中间主界面 |

> 💡进阶小知识：容器可以**嵌套**！Grid里面放StackPanel，StackPanel里面再放DockPanel，组合出复杂界面。本节课先不练习嵌套。

------

## 📝课后练习任务

新建一个窗口，完成3个小练习： 练习1：使用**StackPanel竖向**，从上往下依次摆放： Label文字：用户名、TextBox输入框、Label文字：密码、TextBox输入框、Button登录按钮

练习2：使用**DockPanel**，做出： 顶部放一个Button（内容="顶部菜单"）、左侧放一个Button（内容="导航栏"）、中间放一个TextBlock文字="主页内容"

练习3：使用**Grid**，划分成 2行2列，四个格子各放一个按钮。

完成练习后，下一节课：**第6课 传统后台事件写法：按钮Click事件，Code‑Behind完整示例** 有任何地方听不懂随时说。







# WPF零基础教程｜阶段一 第6课

> 🎯本节课知识点：按钮Click点击事件，Code‑Behind（后台代码）完整写法 ✅前置：掌握基础控件、布局容器，懂得 `x:Name` ⚠️本节课目标：实现「点击按钮，窗口文字发生变化」；彻底搞懂 XAML界面 和 后台cs事件代码如何联动；**全程不用绑定、不用MVVM**

## 一、大白话：什么是事件？

事件 = 用户做了一个动作，软件收到这个动作之后去执行一段代码。 举例子：

- 用户用鼠标**点击按钮** → `Click` 点击事件被触发
- 用户在输入框敲键盘打字 → 文字改变事件

`Click` 就是按钮最常用的点击事件。

> Code‑Behind模式：**事件处理的业务代码直接写在 MainWindow.xaml.cs 里面**，这就是我们现阶段的写法，后面MVVM阶段才会放弃这种方式。

## 二、两种给按钮添加Click事件的方法

### 方法A：在XAML里面写Click属性（推荐新手先学这个）

事件属性格式：`Click="方法名"`

```
<Button Content="点击我" Click="Btn_Click"/>
```

含义：鼠标点击这个按钮的时候，就去执行后台C#里面名字叫 `Btn_Click` 的方法。

> 💡命名小习惯：按钮名字叫 btnOk，事件方法就叫 btnOk_Click，方便辨认。

## 三、完整可运行Demo示例：点击按钮修改文字

### 第1步：修改 MainWindow.xaml

全部复制下面代码：

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="第6课 Click点击事件演示" 
        Height="450" 
        Width="800">
    <StackPanel Margin="30">
        <TextBlock x:Name="txtResult" 
                   Text="还没有点击按钮" 
                   FontSize="28"
                   Margin="0,0,0,30"/>

        <Button x:Name="btnClickMe" 
                Content="点这里修改文字" 
                FontSize="22"
                Width="220"
                Click="btnClickMe_Click"/>
    </StackPanel>
</Window>
```

#### XAML代码逐行讲解

1. `<StackPanel Margin="30">`：竖向堆叠容器，所有控件从上往下排

2. ```
   <TextBlock x:Name="txtResult" Text="还没有点击按钮" FontSize="28"/>
   ```

   - 用来展示结果的文字控件，起名字 `txtResult`，后台代码可以找到它修改文字

3. ```
   <Button ... Click="btnClickMe_Click"/>
   ```

   - `Click="btnClickMe_Click"`：绑定点击事件；点击按钮就去执行后台名叫 `btnClickMe_Click` 的C#方法

> ⚠️注意：`btnClickMe_Click` 这个方法**现在还不存在**，我们接下来去cs文件里面写它。

### 第2步：打开 MainWindow.xaml.cs，编写点击事件方法

完整后台代码：

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            // 构造函数：窗口刚打开的时候执行，点击按钮不会跑这里代码
        }

        // 按钮点击事件方法
        private void btnClickMe_Click(object sender, RoutedEventArgs e)
        {
            // 点击按钮之后执行的业务代码写在这里
            txtResult.Text = "按钮已经被你点击啦！";
        }
    }
}
```

#### 逐行讲解事件方法

```
private void btnClickMe_Click(object sender, RoutedEventArgs e)
```

1. `private`：私有方法，只能当前窗口内部使用
2. `void`：这个方法执行完之后**没有返回结果**
3. `btnClickMe_Click`：方法名字，**必须和XAML里面Click="xxx"的名字一模一样，大小写也要一致！**
4. `object sender`：触发这个事件的控件是谁。这里就是我们点击的那个按钮
5. `RoutedEventArgs e`：附带的事件信息，小白前期暂时不需要使用这个参数

```
txtResult.Text = "按钮已经被你点击啦！";
```

- 通过 `x:Name` 找到界面上的 `txtResult` 文字控件
- 修改它的Text属性，界面文字立刻刷新

### 第3步：运行测试

▶️启动程序

1. 刚打开窗口：文字 =「还没有点击按钮」
2. 鼠标单击按钮 → 文字立刻变成「按钮已经被你点击啦！」 ✅成功，第一个点击事件完成！

------

## 四、进阶小Demo：读取输入框内容，点击按钮显示出来

这个例子更贴近真实软件场景：用户输入文字，点按钮，读出输入框里面的内容。

### XAML代码

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="读取输入框演示" Height="450" Width="800">
    <StackPanel Margin="30">
        <Label Content="请输入文字：" FontSize="20"/>
        <TextBox x:Name="txtInput" FontSize="20" Margin="0,10,0,20"/>
        <Button Content="读取输入内容" FontSize="20" Width="200" Click="btnRead_Click"/>
        <TextBlock x:Name="txtShowResult" FontSize="24" Margin="0,30,0,0"/>
    </StackPanel>
</Window>
```

### 后台cs代码

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void btnRead_Click(object sender, RoutedEventArgs e)
        {
            // 获取输入框里面用户打字的文字
            string userText = txtInput.Text;
            // 将文字赋值给展示控件
            txtShowResult.Text = $"你输入的内容是：{userText}";
        }
    }
}
```

运行效果：你在输入框随便打字，点击按钮，下方文字就会显示出你输入的内容。

------

## 五、新手高频坑点（一定要看）

1. ❌ XAML写的事件方法名，和后台方法名字拼写、大小写不一样 → 程序报错跑不起来

2. ❌ 控件忘记写 `x:Name` → 后台找不到这个控件，报错

3. ❌ 把点击之后要执行的代码写到构造函数 

   ```
   InitializeComponent()
   ```

    后面：

   - 构造函数代码只会**窗口刚打开执行一次**，点击按钮不会再次执行
   - 点击后的代码**必须写在‑Click事件方法的大括号{}里面**

4. Code‑Behind模式缺点（提前了解，后面MVVM会解决）

   > 界面控件、业务逻辑代码紧紧绑死在一起，窗口代码越写越臃肿；后期不方便单元测试。后面第8课我们就会学习MVVM方案替代这种写法。

------

## 📚本节课小结

1. `Click` 是按钮的鼠标点击事件
2. XAML：`Click="方法名"`，绑定点击动作到后台C#方法
3. 后台方法固定模板：`private void 方法名(object sender, RoutedEventArgs e)`
4. 在事件方法内部，利用控件的 `x:Name`，读取/修改界面控件的值
5. 当前写法叫 Code‑Behind（后台代码模式）

## 📝课后练习任务

新建页面完成登录小Demo：

1. 使用StackPanel竖向布局
2. Label：账号；TextBox `x:Name="txtAccount"`
3. Label：密码；TextBox `x:Name="txtPwd"`
4. Button，Content="登录"，绑定Click事件 `btnLogin_Click`
5. 添加一个TextBlock，`x:Name="txtMessage"`，用来输出提示
6. 在按钮点击事件里面：
   - 如果账号文本等于 `admin`，密码等于 `123456` → txtMessage.Text = "登录成功！"
   - 否则 → txtMessage.Text = "账号或者密码错误"

做完练习后就开启：**第7课 WPF数据绑定基础：{Binding}是什么、单向绑定、双向绑定，INotifyPropertyChanged原理，手写属性变更通知完整例子。** 哪里听不懂随时告诉我。



# WPF零基础教程｜阶段一 第7课

> 🎯本节课知识点：{Binding}基础、单向绑定、双向绑定、INotifyPropertyChanged、手写属性变更通知完整示例 ✅前置：掌握Code‑Behind点击事件、x:Name操控控件 ⚠️重要前置说明： 在前面Code‑Behind写法中，我们**依靠 x:Name 找到界面控件**，直接读写控件的Text属性。 而「数据绑定」是一条完全不同的新路：**界面直接绑定到数据，不去操作控件**。

## 一、先搞懂痛点：老写法有什么麻烦

回顾上节课登录例子： 后台代码要写：

```
txtMessage.Text = "登录成功！";
```

缺点：

1. 后台代码直接操作界面控件对象 `txtMessage`
2. 业务数据 和 界面死死捆绑在一起
3. 如果以后界面删掉这个TextBlock，你的C#代码也要跟着改

> 💡绑定思想大白话： 我们单独放一个「数据盒子」存放文字；界面控件不去手动赋值，而是**盯着这个盒子，盒子一变，界面自动跟着刷新**。 这条自动连线，就叫做 **Binding（绑定）**

## 二、什么是 {Binding}

`{Binding}` 是XAML里面的标记，作用：

> 建立一条「界面控件 ↔ 数据」的自动连线

- 单向绑定：数据变了 → 界面自动更新；界面上用户修改输入框，**不会反过来改数据**
- 双向绑定：两边互通；数据变界面刷新；用户在输入框打字，数据盒子的值也立刻被更新

> 数据源：被界面绑定的那个C#对象（存放数据的盒子） DataContext：数据上下文。大白话：告诉窗口「你要去哪里找绑定的数据盒子」。没有设置DataContext，绑定找不到数据源，界面不会显示任何东西。

## 三、单向绑定示例

> 单向 OneWay：数据→界面，单向通行

### 完整示例代码

#### MainWindow.xaml

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="单向绑定演示" Height="450" Width="800">
    <StackPanel Margin="30">
        <!-- Text的内容绑定到 Message 这个属性 -->
        <TextBlock Text="{Binding Message}" FontSize="28"/>

        <Button Content="修改数据" Click="BtnChange_Click" FontSize="22" Width="200"/>
    </StackPanel>
</Window>
```

##### XAML逐行讲解

`Text="{Binding Message}"` 意思：这个TextBlock的文字，去数据源里面找一个名叫 `Message` 的属性，拿它的值显示出来。

> ⚠️这里**不再写 x:Name**！我们不再打算后台找到这个TextBlock控件去改它文字。

接下来我们新建一个存放数据的C#类。 在你的项目右键 → 添加 → 类，命名 `DemoData.cs`

```
namespace MyFirstWpf
{
    public class DemoData
    {
        // 普通属性
        public string Message { get; set; }
    }
}
```

打开 MainWindow.xaml.cs

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        // 创建我们的数据盒子对象
        private DemoData data;

        public MainWindow()
        {
            InitializeComponent();

            data = new DemoData();
            data.Message = "初始文字";

            // 设置数据上下文：告诉窗口，绑定数据源就是data对象
            this.DataContext = data;
        }

        private void BtnChange_Click(object sender, RoutedEventArgs e)
        {
            // 我们只修改数据，不去碰界面控件
            data.Message = "点击后的数据";
        }
    }
}
```

▶️运行测试： 刚打开窗口：文字「初始文字」✅ 点击按钮 → **文字没有任何变化！！**

> 🚨出现本节课最核心问题！ 虽然我们修改了 `data.Message`，但是界面完全不知道这个属性变了。 普通的 `{get;set;}` 属性，**不会自动发出“我已经改变”的通知**。 WPF界面收不到消息，所以不会刷新UI。 解决方案就是：`INotifyPropertyChanged` 接口

## 四、INotifyPropertyChanged 原理大白话

`INotifyPropertyChanged` 是微软提供的一个「通知接口」。 作用：当你的属性值被修改时，主动发送一条消息告诉WPF：

> “嗨！某某属性的值变啦，请刷新一下界面！”

没有这个通知 → UI不刷新 有这个通知 → UI自动刷新

接口里面只有一个事件：

```
event PropertyChangedEventHandler? PropertyChanged;
```

当属性改动，我们手动触发这个事件，WPF收到事件就更新界面。

## 五、手写完整带通知的绑定示例（单向绑定，UI自动刷新）

修改 DemoData.cs，实现 INotifyPropertyChanged

```
using System.ComponentModel;

namespace MyFirstWpf
{
    public class DemoData : INotifyPropertyChanged
    {
        // 私有后台字段
        private string _message;

        // 公开属性
        public string Message
        {
            get
            {
                return _message;
            }
            set
            {
                _message = value;
                // 值修改完成后，发出变更通知
                OnPropertyChanged(nameof(Message));
            }
        }

        // 属性变更事件
        public event PropertyChangedEventHandler? PropertyChanged;

        // 触发通知的辅助方法
        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
```

### DemoData逐行讲解

1. `: INotifyPropertyChanged`：让这个类实现通知接口

2. `private string _message;`：私有字段，真正存数据的地方（后台存储）

3. ```
   public string Message
   ```

   ：对外暴露的属性

   - get：读取值，返回 _message
   - set：给属性赋值，先把值存进 _message，然后调用通知方法

4. ```
   OnPropertyChanged(nameof(Message))
   ```

   - `nameof(Message)`：自动拿到属性名字的字符串 `"Message"`
   - 发出通知：Message属性变了

5. `public event PropertyChangedEventHandler? PropertyChanged;` 接口强制要求我们必须定义这个事件

6. `PropertyChanged?.Invoke(...)`：如果有人监听这个事件（WPF界面绑定就正在监听），就发送变更消息

> MainWindow.xaml 和 MainWindow.xaml.cs 的代码**完全不用改动**，还是上一段代码。 ▶️重新运行测试： 点击按钮，`data.Message` 被修改 → set代码执行 → 发出通知 → WPF收到通知 → TextBlock文字自动刷新！✅ 成功实现数据驱动界面。

## 六、双向绑定 Two‑Way

单向绑定：数据→界面 双向绑定：数据 ↔ 界面，两条通道互通。 典型场景：TextBox输入框。用户在窗口打字，输入框的值自动回写到数据源属性里面。

### 双向绑定完整Demo

#### MainWindow.xaml

```
<Window x:Class="MyFirstWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="双向绑定演示" Height="450" Width="800">
    <StackPanel Margin="30">
        <!-- Mode=TwoWay 开启双向绑定 -->
        <TextBox Text="{Binding Message, Mode=TwoWay}" FontSize="24"/>

        <TextBlock Text="{Binding Message}" FontSize="24" Margin="0,20,0,0"/>

        <Button Content="打印当前数据值" Click="BtnPrint_Click" FontSize="20" Width="220" Margin="0,20,0,0"/>
    </StackPanel>
</Window>
```

绑定解释： `{Binding Message, Mode=TwoWay}`

- TwoWay：双向绑定
- 输入框文字改变 → 自动更新数据源Message的值
- Message的值改变 → 自动更新输入框文字

DemoData.cs 和上面一模一样（必须实现 INotifyPropertyChanged）

MainWindow.xaml.cs：

```
using System.Windows;

namespace MyFirstWpf
{
    public partial class MainWindow : Window
    {
        private DemoData data;
        public MainWindow()
        {
            InitializeComponent();
            data = new DemoData();
            data.Message = "初始内容";
            this.DataContext = data;
        }

        private void BtnPrint_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show(data.Message);
        }
    }
}
```

运行效果：

1. 在文本框打字修改文字
2. 下方TextBlock立刻同步跟着变化
3. 点击按钮弹窗，可以看到data.Message已经被自动更新成你输入的文字。

> 💡小知识：TextBox的Text属性，绑定默认就是TwoWay，你不写Mode=TwoWay也可以；但是TextBlock只能看不能输入，默认是OneWay单向。

## 七、本节课三大绑定模式小结

1. OneWay（单向）：数据源变→界面刷新；界面不能反过来改数据源，适合TextBlock
2. TwoWay（双向）：两边互通；适合TextBox输入框
3. OneTime：程序启动时读取一次，之后不再更新（极少用）

> 手写INotifyPropertyChanged缺点： 每一个属性你都要写一长串样板代码。后面阶段二学习 CommunityToolkit.Mvvm 的 `[ObservableProperty]`，可以自动生成这一堆通知代码，不用手写。

------

## 📝课后练习任务

1. 使用上面的 DemoData 类（带INotifyPropertyChanged通知）
2. XAML放置：TextBox双向绑定Name属性；TextBlock绑定Name；一个按钮
3. 在DemoData中，增加一个新属性 `Name`，完整手写私有字段+get‑set+属性变更通知
4. 点击按钮，后台代码修改 `data.Name = "李四"`
5. 运行测试：点击按钮文字刷新；你在输入框打字，Name属性同步更新

> 完成练习，阶段一（原生WPF基础）全部结束！ 接下来开启 **阶段二 第8课：MVVM概念讲解，Model‑View‑ViewModel每层职责、优缺点，为什么放弃后台Click事件。** 哪里听不懂随时提出来，我换例子重讲。
