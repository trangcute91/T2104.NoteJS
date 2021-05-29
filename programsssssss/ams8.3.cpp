#include<stdio.h>
int main(){
	int n,i,j,temp;
	temp=0;
	printf("nhap vao n=");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		printf("nhap vao gia tri cua phan tu %d=",i);
		scanf("%d",arr[i]);
		for(j=0;j=n-i-1;i++){
			if(arr[j]>arr[j+1]){
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}for(int k=0;k<i;k++){
				printf("%d",arr[k]);
			}
		}
	}for(i=0;i<n;i++){
	
	printf("gia tri cua cac phan tu la %5d",arr[i]);
}
}

