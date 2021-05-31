#include<stdio.h>
#include "thuvien.h"

//bool timxtrongmang(int arr[],int n,int x){
//	for(int i=0;i<n;i++){
//		if(arr[i]==x){
//			return true;
//		}else{
//		return false;}
//}
//}
int main(){
	int x,n;
	printf("nhap kich thuoc mang: ");
	scanf("%d",&n);
	int arr[n];  
	printf("\nnhap so can tim x: ");
	scanf("%d",&x);
	for(int i=0;i<n;i++){
	printf("\nnhap gt cua pt: ");
	printf("arr[%d]: ",i);
	scanf("%d",&arr[i]);
    }
    if(timxtrongmang(arr,n,x)){
    	printf("co x trong mang");
	}else{
		
	printf("khong co x trong mang");}
}
