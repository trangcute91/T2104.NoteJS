#include<stdio.h>
#include<string.h>
int main(){
	int n;
	printf("nhap n=");
	scanf("%d",&n);
	char arr[n][50];
	for(int i=0;i<n;i++){
		printf("bat dau duyet chuoi %d:",i);
		scanf("%s",arr[i]);		
	}
	for(int i=0;i<n-1;i++){
		for(int j=0;j<n-i-1;j++){
			if(strcmp(arr[j],arr[i])>0){
			char tmp[50];
			strcpy(tmp,arr[j]);
			strcpy(arr[j],arr[j+1]);
			strcpy(arr[j+1],tmp);
		}
		}
	}
	printf("sau khi sap xep \n");
	for(int i=0;i<n;i++){
		printf("%s\n",arr[i]);
	}
}
