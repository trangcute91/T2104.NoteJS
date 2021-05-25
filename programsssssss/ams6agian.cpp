#include<stdio.h>
int main (){
	int lc,lc1,lc2,b;
	b=0;
	menu:do{
	printf("nha hang hoa ban kinh chao quy khach\n");
	printf("xin hay chon mon cho minh\n");
	printf("1 chon mon an \n2 chon do uong\n3 thanh toan\n4 thoat khoi chuong tinh");
	scanf("%d",&lc);
	if(lc==1){
	printf(" 1 com ga \n 2 bun \n 3 pho\n 4 quay lai menu");
	scanf("%d",&lc1);
	if(lc1==1){
		printf("cam on da chon com ga\n");
		b=b+30000;
		goto menu;
			}
	    else if(lc1==2){
	    	printf("cam on da chon bun\n");
	    	b=b+27000;
	    	goto menu;
		}
		else if(lc1==3){
			printf("cam on da chon pho\n");
			b=b+25000;
			goto menu;
		}else if(lc1==4){
		printf("cam on quy khach\n");
		goto menu;	
		}else{
			printf("lua chon sai moi chon lai");
			goto menu;
		}
	}else if(lc==2){
		printf(" 1 coca\n 2 pepsi\n 3 tra da \n 4 quay lai menu\n");
		scanf("%d",&lc2);
		if(lc2==1){
			printf("cam on da chon coca\n");
			b=b+10000;
			goto menu;
		}else if(lc2==2){
			printf("cam on da chon pepsi\n");
			b=b+11000;
			goto menu;
		}else if(lc2==3){
			printf("cam on da chon tra da\n");
			b=b+3000;
			goto menu;
		}else if(lc2==4){
			printf("xin cam on\n");
			goto menu;
		}
		else{
			printf("lua chon sai xin hay chon lai\n");
			goto menu;
		}

	}else if(lc==3){
		printf("ho don cua quy khach la %d \n xin cam on",b);
		goto menu;
	}
	
}while(lc<4|| lc>4);
printf(" hen gap lai quy khach");
}



