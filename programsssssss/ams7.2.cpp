#include<stdio.h>
int main(){
	int mang[10];
	int i,min,d;
	for(i=0;i<10;i++){
		printf("nhap gia tri phan tu %d cua mang so \n",i);
		scanf("%d",&mang[i]);
		}
		min=mang[0];
	
	for(i=0;i<10;i++){
			if(mang[i]>0 &&min>=mang[i]){
			min=mang[i];
			d=d+1;
		}
	
	}if(d>0){
	printf("phan tu duong be nhat trong mang = %d ",min);
	}else{
		printf("khong co so duong lon nhat");
	}
	
}
	
