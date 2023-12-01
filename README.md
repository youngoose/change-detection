# ChangeDetection

## Objective

> Understand how change detection works with different use cases

> Push commits with corresponding use cases

1. [Add OnPush on the child](https://github.com/youngoose/change-detection/tree/on-push)

> Issue

- does not recognize a new reference for the data input
- does not run change detection on the component

> Fix

- no longer mutating the fruits array
- returns a complete new array
- modify parent and child component to use the OnPush change detection strategy.

2. [Add ChangeDetectorRef.detectChanges() with button](https://github.com/youngoose/change-detection/tree/detect-changes)

> Issue

- append array with .push will not update the unordered list

> Fix

- pressing the Refresh button will run change detection on the component

3. [Add ChangeDetectorRef.markForCheck()](https://github.com/youngoose/change-detection/tree/mark-for-check)

> Issue

- the new data from parent component mutates the data Observable on child component
- problem is that angular does not run change detection

> Solution

- markForCheck instructs Angular that this particular input should trigger change detection when mutated

## Conclusion

> ChangeDetectionStrategy and ChangeDetectorRef

- by default, angular will perform change detection on all components
- ChangeDetectionStrategy and ChangeDetectorRef can be applied to components to perform change detection on new references VS when data is mutated

### [Reference - digitalocean.com](https://www.digitalocean.com/community/tutorials/angular-change-detection-strategy)
