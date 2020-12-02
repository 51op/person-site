# 2.1循环


### for循环


>for (初始表达式; 布尔表达式; 迭代因子) {
      循环体;
}

```  
public class Test10 {
    public static void main(String args[]) {
        int sum = 0;
        //1.求1-100之间的累加和
        for (int i = 0; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum= " + sum);
        //2.循环输出9-1之间的数
        for(int i=9;i>0;i--){
            System.out.print(i+"、");
        }
        System.out.println();
        //3.输出90-1之间能被3整除的数
        for(int i=90;i>0;i-=3){
            System.out.print(i+"、");
        }
        System.out.println();
    }
}
```

###嵌套循环
``` 
public class Test14 {
    public static void main(String args[]) {
        for (int i=1; i <=5; i++) {
            for(int j=1; j<=5; j++){
                System.out.print(i+"  ");
            }
            System.out.println();
        }
    }
}
```


###break语句和continue语句

      在任何循环语句的主体部分，均可用break控制循环的流程。break用于强行退出循环，不执行循环中剩余的语句。
      continue 语句用在循环语句体中，用于终止某次循环过程，即跳过循环体中尚未执行的语句，接着进行下一次是否执行循环的判定。
   
   注意事项
         1. continue用在while，do-while中，continue 语句立刻跳到循环首部，越过了当前循环的其余部分。
         2. continue用在for循环中，跳到for循环的迭代因子部分。
   

```  
public class Test16 {
    public static void main(String[] args) {
        int total = 0;//定义计数器
        System.out.println("Begin");
        while (true) {
            total++;//每循环一次计数器加1
            int i = (int) Math.round(100 * Math.random());
            //当i等于88时，退出循环
            if (i == 88) {
                break;
            }
        }
        //输出循环的次数
        System.out.println("Game over， used " + total + " times.");
    }
}
```