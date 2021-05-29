#include<stdio.h>

int main(){
	int n,i,x,j;
	printf("nhap n");
	scanf("%d",&n);
	printf("nhap x =");
	scanf("%d",&x);
	int arr[n];
	for(i=0;i<n;i++){
		printf("nhap gia tri phan tu %d=",i);
		scanf("%d",&arr[i]);
		if(arr[i]==x){
			do{
				printf("nhap lai gia tri phan tu %d =",i);
				scanf("%d",&arr[i]);
			}while(arr[i]==x);
		}
	}
		for(i=0;i<n;i++){
		printf(" cac phan tu trong mang la %d \n",arr[i]);}
}
