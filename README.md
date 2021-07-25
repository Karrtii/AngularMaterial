# AngularMaterial
Repository for Angular Material code while learning

Documentation: https://material.angular.io/ <br/>
Installing: ng add @angular/material

## Table of Contents
1. [Typography](#typography)
2. [Button](#button)
3. [Button Toggle](#buttonToggle)
4. [Icon](#icon)
5. [Badges](#badges)
6. [Progress Spinner](#progressSpinner)
7. [Toolbar/Navbar](#toolbar)
8. [Sidenav](#sidenav)
9. [Menu](#menu)

## 1. Typography <a name="typography"></a>
![image](https://user-images.githubusercontent.com/71009398/126654265-33302da7-a26d-4096-a9b2-1a263b1fa6a0.png)<br/>
![image](https://user-images.githubusercontent.com/71009398/126654427-7b807403-df63-4c02-ba32-15a912c22c89.png)<br/>
![image](https://user-images.githubusercontent.com/71009398/126654468-880a1896-d6a6-4bb9-ae73-b04892876a12.png)<br/>
![image](https://user-images.githubusercontent.com/71009398/126654523-bd5a0aa5-3913-46b6-a8f8-bff78ba95737.png)<br/>

HTML:
```
<div class="mat-display-4">This is display 4</div>
<div class="mat-display-3">This is display 3</div>
<div class="mat-display-2">This is display 2</div>
<div class="mat-display-1">This is display 1</div>

<div class="mat-headline">This is a heading for h1</div>
<div class="mat-title">This is a heading for h2</div>
<div class="mat-subheading-1">This is a heading for h3</div>
<div class="mat-subheading-2">This is a heading for h4</div>

<div class="mat-body-1">This is body text</div>
<div class="mat-body-2">This is bold body text</div>
<div class="mat-caption">This is caption text</div>

<div class="mat-typography">
  <h1>This is a heading for h1</h1>
  <h2>This is a heading for h2</h2>
  <h3>This is a heading for h3</h3>
  <h4>This is a heading for h4</h4>
</div>
```

## 2. Button <a name="button"></a>
![image](https://user-images.githubusercontent.com/71009398/126654908-90f0cd9b-b6af-403b-8463-31b25008d501.png)<br/>

HTML:
```
<div>
  <button mat-button>Click me!</button>
  <button mat-raised-button>Click me!</button>
  <button mat-flat-button>Click me!</button>
  <button mat-stroked-button>Click me!</button>
</div>

<div>
  <button mat-icon-button>Icon</button>
  <button mat-fab>Fab</button>
  <button mat-mini-fab>mini</button>
</div>

<div>
  <button color="primary" mat-button>Primary</button>
  <button color="accent" mat-button>Accent</button>
  <button color="warn" disableRipple mat-button>Warn</button>  <!--Ripple effect disabled as well-->

  <button color="primary" mat-raised-button>Primary</button>
  <button color="accent" mat-raised-button>Accent</button>
  <button color="warn" mat-raised-button>Warn</button>
</div>
```

## 3. Button Toggle <a name="buttonToggle"></a>
![image](https://user-images.githubusercontent.com/71009398/126655447-e033762a-a5fb-46d7-b5cc-7d0bbc7e733a.png)<br/>

HTML:
```
<div>
  <mat-button-toggle #toggleButton checked>Toggle</mat-button-toggle>
  {{toggleButton.checked}}
</div>

<!--Toggle between one of them-->
<div>
  <mat-button-toggle-group #toggleGroup="matButtonToggleGroup">
    <mat-button-toggle value="angular">Angular</mat-button-toggle>
    <mat-button-toggle value="android">Android</mat-button-toggle>
    <mat-button-toggle value="blazor">Blazor</mat-button-toggle>
  </mat-button-toggle-group>
  {{toggleGroup.value}}
</div>

<!--Can choose multiple-->
<div>
  <mat-button-toggle-group #toggleGroup2="matButtonToggleGroup" multiple>
    <mat-button-toggle value="angular">Angular</mat-button-toggle>
    <mat-button-toggle value="android">Android</mat-button-toggle>
    <mat-button-toggle value="blazor">Blazor</mat-button-toggle>
  </mat-button-toggle-group>
  {{toggleGroup2.value}}
</div>
```

## 4. Icon <a name="icon"></a>
![image](https://user-images.githubusercontent.com/71009398/126655949-bc914c7a-8cb6-40bf-aeeb-c2d0935e016d.png)<br/>

HTML:
```
<!-- icon names - https://fonts.google.com/icons?selected=Material+Icons-->
<div>
  <mat-icon color="primary">grade</mat-icon>
</div>
```

## 5. Badges <a name="badges"></a>
![image](https://user-images.githubusercontent.com/71009398/126656317-d75ba184-e3e7-4478-8409-d0bf4592fce1.png)<br/>

HTML:
```
<!--to avoid overlap, use matBadgeOverlap="false", and to hide the badge when there is no notification use matBadgeHidden-->
<div>
  <span [matBadge]="notifications" [matBadgeHidden]="notifications == 0">Notifications</span>
</div>


<!--position of badges-->
<div>
  <span matBadge="5" matBadgePosition="below before">Notifications</span>
</div>

<div>
  <span matBadge="5" matBadgePosition="below after">Notifications</span>
</div>

<div>
  <span matBadge="5" matBadgePosition="above before">Notifications</span>
</div>


<!--size of badges-->
<div>
  <span matBadge="5" matBadgeSize="small">Notifications</span>
</div>

<div>
  <span matBadge="5" matBadgeSize="medium">Notifications</span>
</div>

<div>
  <span matBadge="5" matBadgeSize="large">Notifications</span>
</div>


<!--color of badges-->
<div>
  <span matBadge="5" matBadgeColor="primary">Notifications</span>
</div>

<div>
  <span matBadge="5" matBadgeColor="accent">Notifications</span>
</div>

<div>
  <span matBadge="5" matBadgeColor="warn" matBadgeOverlap="false">Notifications</span>
</div>
```

component.ts:
```
  notifications = 2;
```

## 6. Progress Spinner <a name="progressSpinner"/>
![image](https://user-images.githubusercontent.com/71009398/126904398-f4c918a7-182a-433a-b77b-7d799f9aac98.png)<br/>

HTML:
```
<div>
    <mat-progress-spinner value="40"></mat-progress-spinner>
</div>

<div>
    <mat-spinner *ngIf="showSpinner" color="accent"></mat-spinner>
    <button (click)="loadData()">Load Data</button>
</div>
```

component.ts:
```
loadData()
  {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
```

## 7. Toolbar/Navbar <a name="toolbar"/>
![image](https://user-images.githubusercontent.com/71009398/126904502-66ee4b32-a0cb-4ad1-be23-2f908bb74c4b.png)<br/>

HTML:
```
<div>
  <mat-toolbar color="primary" class="navbar">
    <div>Angular</div>
    <div>
      <span>Home</span>
      <span>About</span>
      <span>Services</span>
    </div>
  </mat-toolbar>
</div>
```

## 8. Sidenav <a name="sidenav"/>
![image](https://user-images.githubusercontent.com/71009398/126904552-8b818a0c-dfda-48ee-9fc2-6653b1e6f4b1.png)<br/>

HTML:
```
<mat-sidenav-container>
    <mat-sidenav #sidenav (opened)="log('Opened')" (closed)="log('Closed')" mode="side" [(opened)]="opened">Sidenav</mat-sidenav>
    <mat-sidenav-content>Main
      <button (click)="opened=!opened">Toggle Opened</button>
      <button (click)="sidenav.open()">Open</button>
      <button (click)="sidenav.close()">Close</button>
      <button (click)="sidenav.toggle()">Toggle</button>
    </mat-sidenav-content>
  </mat-sidenav-container>

<!--There are 3 modes that can be included int he mat-sidenav: over, push, and side-->
```

component.ts:
```
opened = false;

  log(state: any)
  {
    console.log(state);
  }
```


## 9. Menu <a name="menu"/>
![image](https://user-images.githubusercontent.com/71009398/126904678-1ae2b3de-81fc-4696-9cfd-08cf31c4be20.png)<br/>
![image](https://user-images.githubusercontent.com/71009398/126904684-845410c8-25cb-4f1d-b269-ad50adc671bf.png)
![image](https://user-images.githubusercontent.com/71009398/126904699-f3c9777c-5818-4ac6-8297-97f37c398ed8.png)<br/>

HTML:
```
<mat-menu #appMenu="matMenu" xPosition="after" yPosition="below"> <!--x and y position dictates how the menu should open.-->
  <button mat-menu-item [matMenuTriggerFor]="subMenu">FrontEnd</button>
  <button mat-menu-item>BackEnd</button>
</mat-menu>

<button class="center" mat-flat-button [matMenuTriggerFor]="appMenu">Menu</button>

<mat-menu #subMenu="matMenu">
  <button mat-menu-item>Android</button>
  <button mat-menu-item>Angular</button>
  <button mat-menu-item>React</button>
</mat-menu>

<mat-menu #lazyMenu="matMenu">
  <ng-template matMenuContent let-name="name" let-hobby="hobby">
    <button mat-menu-item>Settings</button>
    <button mat-menu-item>Hobby is {{hobby}}</button>
    <button mat-menu-item>Log out {{name}}</button>
  </ng-template>
</mat-menu>

<button [matMenuTriggerData]="{name: 'Kratos', hobby: 'hunting'}" [matMenuTriggerFor]="lazyMenu">Kratos</button>
<button [matMenuTriggerData]="{name: 'Atreus', hobby: 'reading'}" [matMenuTriggerFor]="lazyMenu">Atreus</button>
```












