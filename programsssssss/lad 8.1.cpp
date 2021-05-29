#include<stdio.h>
int main(){
	int n,i,x,tc;
	printf("nhap so n");
	scanf("%d",&n);
	printf("nhap vao x");
	scanf("%d",&x);
	int arr[n];
	for(i=0;i<n;i++){
		printf("nhap vao gia tri cua phan tu %",i);
		scanf("%d",&arr[i]);}
		for(i=0;i<n;i++){
		if(x==arr[i]&&x>arr[i-1]){
			tc=arr[i-1];
			}
			
}printf("so can duoi cua x la %d",tc);
}
