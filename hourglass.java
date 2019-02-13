import java.util.Scanner;
public class HelloWorld{

    public static void main(String []args){
        Scanner sc = new Scanner(System.in);
        int[][] a = new int[6][6];
        for (int i = 0; i < 6; i++) {
            for(int j = 0; j < 6; j++){
                a[i][j] = sc.nextInt();
            }
        }
        int max = 0, sum = 0, count = 0, limit = 2;
        for(int k = 0;k < 4;k++){
            for(int i=0;i<3;i++){
                for(int j= limit-3;j<limit;j++){
                    if(i%2 != 0 && j%2 !=0){
                        sum += a[i][j];
                    }else if(i != 1){
                        sum += a[i][j];
                    }
                }
            }
            if(sum > max)
                max = sum;
            if(limit != 6)
                limit++;
        }
        System.out.println(max);
    }
}