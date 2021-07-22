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



















