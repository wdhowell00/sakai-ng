import { Component } from '@angular/core';
import { TransactionWidget } from './components/transactionwidget';

@Component({
    selector: 'app-dashboard',
    imports: [TransactionWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 xl:col-span-6">
                <app-transaction-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
