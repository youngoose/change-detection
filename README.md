# ChangeDetection

## Objective

> Understand how change detection works with different use cases

> Push commits with corresponding use cases

1. Add OnPush on the child

> Issue

- does not recognize a new reference for the data input
- does not run change detection on the component

> Fix

- no longer mutating the fruits array
- returns a complete new array
- modify parent and child component to use the OnPush change detection strategy.

2. Add ChangeDetectorRef with button

> Issue

- append array with .push will not update the unordered list

> Fix

- pressing the Refresh button will run change detection on the component
