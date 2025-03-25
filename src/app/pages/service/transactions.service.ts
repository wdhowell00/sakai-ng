import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { SaleResponse } from '../../dtos/SaleResponse';

export interface TransactionType {
  id?: string;
  name?: string;
  label?: string;
}

export interface SaleRequest {
  transactionTypeName?: string;
  endpoint?: string;
  requestMessage?: string;
}



let LOCAL_API_BASE_URL: string;

@Injectable()
export class TransactionsService {
  getTransactionTypes() {
    return [
      {
        id: '1',
        name: 'sale',
        label: 'Sale'
      },
      {
        id: '2',
        name: 'refund',
        label: 'Refund'
      },
      {
        id: '3',
        name: 'void',
        label: 'Void'
      },
    ]
  }

  constructor(private httpClient: HttpClient) { }

  getTransactionlist() {
    return Promise.resolve(this.getTransactionTypes().slice(0, 5));
  }

  // Create method to get parsed data or add it to the sale response

  public executeTransactions(data: SaleRequest): Observable<SaleResponse> {
    LOCAL_API_BASE_URL = 'https://localhost:7086/api/transaction/ExecuteTransaction';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<SaleResponse>(LOCAL_API_BASE_URL, data, { headers }).pipe(
      map(response => {
        const saleResponse: SaleResponse = {
          resultMessage: response.resultMessage,
          parsedMessageDto: response.parsedMessageDto,
        };
        return saleResponse;
      }),
      catchError(error => {
        console.error('Error executing transaction:', error);
        return throwError(error);
      })
    );
  }

}
