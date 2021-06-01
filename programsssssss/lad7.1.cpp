#include<stdio.h>
int main(){
int mang[10];
int i,tbc,tbc2,d;
tbc=0;
d=0;
	for(i=1;i<10;i++){
	scanf("%d",& mang[i]);
	if(mang[i] %2 !=0 ){
		tbc=tbc+mang[i];
		d++;}
	}
	tbc2=tbc/d;
	printf("trung binh cong cua so le trong mang la %d",tbc2);
}


