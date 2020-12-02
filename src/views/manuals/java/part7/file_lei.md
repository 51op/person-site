
# file类

java.io.File类：代表文件和目录。 在开发中，读取文件、生成文件、删除文件、修改文件的属性时经常会用到本类


File类的常见构造方法：public File(String pathname)，以pathname为路径创建File对象，如果pathname是相对路径，则默认的当前路径在系统属性user.dir中存储
 
 通过File对象可以访问文件的属性：
 ![file属性](/img/1495611382530451.png)
 
 ``` 
public class Test{

    public static void main(String[] ares) throws IOException {
        System.out.println(System.getProperty("user.dir"));
        File file = new File("aaaa.text"); ////相对路径：默认放到user.dir目录下面
        file.createNewFile();

        File file1 = new File("/tmp/b.text");
        file1.createNewFile();

        File f = new File("/tmp/b.txt");
        System.out.println("File是否存在："+f.exists());
        System.out.println("File是否是目录："+f.isDirectory());
        System.out.println("File是否是文件："+f.isFile());
        System.out.println("File最后修改时间："+new Date(f.lastModified()));
        System.out.println("File的大小："+f.length());
        System.out.println("File的文件名："+f.getName());
        System.out.println("File的目录路径："+f.getPath());
    }
}
 ```
 
 
通过File对象创建空文件或目录(在该对象所指的文件或目录不存在的情况下)

|方法|说明|
|----|----|
|createNewFile()|创建新的file|
|delete()|删除file文件|
|mkdir()|创建1个目录，中间某个目录缺失，则创建失败|
|mkdirs()|创建多个目录，中间某个目录缺失，则创建该缺失目录|

``` 
import java.io.File;
public class TestFile3 {
    public static void main(String[] args) throws Exception {
        File f = new File("/tmp/c.txt");
        f.createNewFile(); // tmp目录下生成c.txt文件
        
        f.delete(); // 将该文件或目录从硬盘上删除
        File f2 = new File("／tmp/test_dev");
        boolean flag = f2.mkdir(); //目录结构中有一个不存在，则不会创建整个目录树
        System.out.println(flag);//创建失败
    }
}
```



使用递归算法，以树状结构展示目录树

``` 
import java.io.File;
public class TestFile6 {
    public static void main(String[] args) {
        File f = new File("d:/电影");
        printFile(f, 0);
    }
    /**
     * 打印文件信息
     * @param file 文件名称
     * @param level 层次数(实际就是：第几次递归调用)
     */
    static void printFile(File file, int level) {
        //输出层次数
        for (int i = 0; i < level; i++) {
            System.out.print("-");
        }
        //输出文件名
        System.out.println(file.getName());
        //如果file是目录，则获取子文件列表，并对每个子文件进行相同的操作
        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (File temp : files) {
                //递归调用该方法：注意等+1
                printFile(temp, level + 1);
            }
        }
    }
}
```