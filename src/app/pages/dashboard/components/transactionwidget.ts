import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

import { TransactionsService, TransactionType } from '../../service/transactions.service';
import { SaleRequest } from '../../service/transactions.service';
import { SaleResponse } from '../../../dtos/SaleResponse';

@Component({
    standalone: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    selector: 'app-transaction-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule, TableModule],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Transactions</div>
        <p-table [value]="types" [paginator]="false" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th pSortableColumn="label">Name                                                                                                                                                                                                                                                                                                                      </th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-types>
                <tr>
                    <td style="width: 35%; min-width: 7rem;">{{ types.label }}</td>
                    <td style="width: 15%;">
                        <button pButton pRipple (click)="submitSaleRequest()" type="button" [raised]="true" icon="pi pi-bolt" class="p-button p-component p-button-text p-button-icon-only"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>,
    <div class="card">
    <p-table [value]="parsedData" [tableStyle]="{ 'min-width': '60rem' }">
        <ng-template #caption>
            <div class="flex items-center justify-between">
                <span class="text-xl font-bold">Data</span>
                <p-button icon="pi pi-refresh" rounded raised />
            </div>
        </ng-template>
        <ng-template #header>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
        </ng-template>
        <ng-template #body let-parsedItem>
            <tr>
                <td>{{ parsedItem.name }}</td>
                <td>{{ parsedItem.value }}</td>
            </tr>
        </ng-template>
    </p-table>
    </div>`,
    providers: [
        TransactionsService
    ]
})
export class TransactionWidget {
    types!: TransactionType[];
    parsedData!: any;

    constructor(private transactionService: TransactionsService) {}

    ngOnInit() {
        this.transactionService.getTransactionlist().then((data) => (this.types = data));
    }

    submitSaleRequest() {
        let saleRequest: SaleRequest = {
            transactionTypeName: "sale",
            endpoint: "local",
            requestMessage: "Sale Request"
        };

        this.transactionService.executeTransactions(saleRequest).subscribe((response: SaleResponse) => {
            
            if (response.parsedMessageDto) {
                const flatJson = flattenJson(response.parsedMessageDto);
                this.parsedData = Object.keys(flatJson).map(key => {
                    return {
                        name: key,
                        value: flatJson[key],
                    };
                });
            }
            console.log(response);
        });
    }

}

function flattenJson(json: any, prefix = '') {
    const flatObject: any = {};
    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            const newKey = prefix ? `${key}` : key;
            if (typeof json[key] === 'object' && json[key] !== null) {
                Object.assign(flatObject, flattenJson(json[key], newKey));
            } else {
                flatObject[newKey] = json[key];
            }
        }
    }
  return flatObject;
}
