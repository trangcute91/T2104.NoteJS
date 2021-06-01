
	if(n==0){
		f3=0;
	}if(n==1){
		f3=1;
	}
	for(int i=2;i<n;i++){
		f1=f2;
		f2=f3;
		f3=f1+f2;
	}printf("so thuoc day so thu %d la %d",n,f3);
}
