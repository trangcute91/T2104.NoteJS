#include<stdio.h>
int insole(int arr[],int n){
	int i;
	for(i=0;i<n;i++){
		if(arr[i]%2!=0){
			printf("%d",arr[i]);
		}
	} return arr[i];
}
int main(){
	int i,n;
	int arr[n];
	printf("nhap kich thuoc mang");
	scanf("%d",&n);
	for(i=0;i<n;i++){
		printf("nhap gia tri %d cua mang =",i);
		scanf("%d",&arr[i]);		
	}
insole(arr,n);
}
