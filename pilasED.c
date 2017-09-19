#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define MAXPILA 100


void crearPila(int pila[], int tope);
int pilaVacia(int tope);
int pilaLlena(int tope);
void apilar(int  pila[],int tope,int elemento);
void desapilar(int pila[],int tope,int elemento);
void mostrar(int  pila[],int tope);
void llenar(int pila[],int tope);

void crearPila(int pila[],int tope){

tope=0;
}
int pilaVacia(int tope){
return tope=0;
}
int pilaLlena(int tope){
return tope=MAXPILA;
}  
void apilar(int pila[],int tope,int elemento){

   if( tope==pilaLlena(tope)){
  printf("error de desbordamiento");
  }
  else {
  tope=tope+1;
  pila[tope]=elemento;
   }
} 
 void desapilar(int pila[],int tope,int elemento){
   if(tope==pilaVacia(tope)){
   printf("error de desbordamiento");
   }
   else{
      elemento=pila[tope];
      tope=tope-1;
     }
 } 
void mostrar(int pila[],int tope){
int i;
  for(i=0;i<tope;i++){
      printf( "%d \t",pila[i]); 
  }
}
void llenar(int pila[], int tope ){
int i;
srand(time(NULL));
for(i=0;i<tope;i++){
   pila[i]=rand()%20;
  }
}


void main (){
 int tope;
int vector[MAXPILA];
  printf("ingresa el tope \n");
  scanf("%d",&tope);      
  vector[tope];     
  llenar(vector,tope);
  printf("numeros aleatorios \n");
  mostrar(vector,tope);
   
   printf("apilar nuevo valor \n");
   apilar(vector,tope,15);
     mostrar(vector,tope);
   printf("apilar nuevo valor \n");
   apilar(vector,tope,16); 
     mostrar(vector,tope); 
 
}













