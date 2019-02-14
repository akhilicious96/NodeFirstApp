import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {



    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int[][] arr = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                if(arrItem > -10 && arrItem < 10)
                    arr[i][j] = arrItem;
            }
        }
        int max = 0, sum = 0, i_count = 0, j_count = 0, limit = 3;
        scanner.close();

        for(int i = 0; i < 4; i++){
            for(int j = 0; j < 4; j++){
                i_count = 0;
                sum = 0;
                for(int k = i; k < limit+i; k++){
                    j_count = 0;
                    for(int l = j; l < limit+j; l++){
                        if(i_count == 1){
                            if(j_count == 1){
                                sum += arr[k][l] ;
                            }
                        }
                        else{
                            sum += arr[k][l];
                        }
                        //System.out.println("i_count =>"+i_count+"j_count"+j_count+"----"+arr[k][l]+"=>sum=>"+sum);
                        j_count ++;
                    }
                    //System.out.println(sum);
                    i_count ++;
                }
               // System.out.println("["+i+"]["+j+"] : "+ sum);
                if(sum > max)
                    max = sum;
            }
        }

        System.out.println(max);

    }
}
