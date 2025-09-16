DESARROLLO TALLER

1. Componentes básicos
- Qué es un componente y su estructura (decorador @Component, selector, template, style).

En Angular, un componente es la unidad básica de la interfaz de usuario. Un componente típicamente consta de una clase de TypeScript (que contiene la lógica y datos) decorada con @Component, junto con una plantilla (HTML) y opcionalmente estilos CSS.

Decorador @Component: es una función que toma un objeto de configuración que define la metadata del componente, como el selector, el template, los estilos y otros elementos.

Selector: es el nombre que identifica a un componente y se utiliza para invocar dicho componente dentro de un template de otro componente.

Template: es el archivo HTML que define la estructura visual de un componente. Es donde se escriben los elementos y el diseño que el componente debe renderizar en la interfaz de usuario.

Style: es el archivo CSS (o SCSS) que define los estilos visuales del componente. Los estilos pueden ser específicos para ese componente, evitando que se apliquen globalmente.

(Angular, s.f.)

- Diferencia entre un componente de página (vista completa) y uno reutilizable (ej. ProductCard).

Componente de Página: es un componente que representa una vista completa de una ruta en la aplicación, generalmente vinculada a una URL específica. Estos componentes controlan la disposición global de una sección de la interfaz de usuario. Ejemplo: página de inicio de
una aplicación.

Componente Reutilizable: está diseñado para ser utilizado en múltiples lugares de la aplicación. Estos componentes son modulares y pueden ser importados en cualquier otra vista. Ejemplo: tarjetas de producto, botones personalizados, entre otros.

(Seshadri, 2022)

2. Standalone Components (Angular 15+)
- Qué significa que no hay módulos (NgModule).

En versiones previas de Angular, se requería que todos los componentes, directivas y pipes fueran declarados dentro de un NgModule para ser utilizados en la aplicación. Con la introducción de los Standalone Components en Angular 15+, ahora es posible crear componentes
que no necesiten módulos, lo que reduce la necesidad de complejas jerarquías de módulos y mejora la modularización de la aplicación (Angular, s.f.).
- Uso de la propiedad standalone: true.

Cuando se establece standalone: true en un componente, Angular lo trata como un Standalone Component, lo que significa que no necesita ser incluido en un NgModule para ser utilizado. Esta propiedad permite que el componente sea más autónomo y reutilizable, lo cual
mejora la modularidad y reduce la complejidad de la configuración (Angular Team, 2022).
- Importación de otros componentes/módulos dentro de imports.

Cuando un componente o módulo necesita acceder a la funcionalidad de otro, se realiza mediante la declaración en el array imports. Esto permite que un componente o módulo utilice los servicios, directivas y otros recursos definidos en los componentes o módulos
importados (Angular Team, 2020).

3. Data Binding
- Interpolación ({{ }}): permite insertar valores dinámicos dentro de un template HTML, representando una expresión en el código TypeScript del componente.
- Property Binding ([prop]="value"): permite enlazar propiedades de un elemento HTML con propiedades del componente.
- Event Binding ((event)="handler()"): permite manejar eventos, como clicks, cambios o interacciones del usuario, vinculando un método del componente con el evento.
(Seshadri, 2022)

4. Directivas estructurales
   
*ngFor: se usa para crear una lista o un ciclo de elementos en el DOM, iterando sobre una colección de datos.

*ngIf: permite condicionalmente añadir o eliminar un elemento en el DOM basado en la evaluación de una expresión booleana.

(Green, et al., 2020)

5. Decoradores @Input y @Output
   
@Input(): permite pasar datos de un componente padre a un componente hijo. Se utiliza para definir una propiedad en un componente hijo que recibirá los valores enviados desde el componente padre.

@Output(): se utiliza para emitir eventos desde el componente hijo al componente padre. Se suele usar en combinación con un EventEmitter para emitir valores cuando ocurren interacciones.

(Angular Team, 2020)

REFERENCIAS

Angular. (s/f). Angular.Io. Recuperado el 16 de septiembre de 2025, de https://v17.angular.io/guide/architecture-components

Shyam Seshadri. (2022). Mastering Angular: Web Development with TypeScript (3rd ed.). Packt Publishing.

Angular Team. (2022). Angular 15: Standalone Components.

Angular Team. (2020). Angular Docs - NgModules. https://angular.io/guide/ngmodules

Misko Hevery, Brad Green, & Victor Savkin. (2020). Angular: Up and Running (2nd ed.). O'Reilly Media.

Angular Team. (2020). Angular Docs - Input and Output.
