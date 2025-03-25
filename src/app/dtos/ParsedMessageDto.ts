export interface ParsedMessageDto {
    message?: string;
    bitmap?: Uint8Array;
    bits?: string;
    leftoverChecksum?: string;
    EmvConfigData?: Uint8Array;
    bit3?: string;
    bit60?: string;
    init1Request: Init1Request;
    init2Request: Init2Request;
    initResponse: InitResponse;
    dataTransferRequest: DataTransferRequest;
    dataTransferResponse: DataTransferResponse;
    reconciliationRequest: ReconciliationRequest;
    emvConfigurationRequest: EmvConfigurationRequest;
    emvConfigurationResponse: EmvConfigurationResponse;
    otherMessageSDD: OtherMessageSDD;
    parsedMessage: ParsedMessage;
}

export interface ParsedMessage {
    PAN?: string;
    ProcessingCode?: string;
    TransactionAmount?: string;
    TraceNumber?: string;
    LocalTime?: string;
    LocalDate?: string;
    CardExpiryDate?: string;
    CountryCode?: string;
    POSEntryMode?: string;
    CardSequenceNumber?: string;
    POSConditionCode?: string;
    MaxPinDigits?: string;
    SystemId?: string;
    PAN2?: string;
    Track2?: string;
    POSNumber?: string;
    ResponseCode?: string;
    TerminalId?: string;
    CardAcceptorNumber?: string;
    CardAcceptor?: string;
    Track1?: string;
    CardTypeId?: string;
    Track3?: string;
    AdditionalData?: string;
    TransactionCurrencyCode?: string;
    PAC?: string;
    AuthorizationParameter?: string;
    AdditionalAmount?: string;
    EMVData?: string;
    EncryptedData?: string;
    EncryptionParameter?: string;
    AdditionalGICCData?: string;
    AuthorizationIdentifier?: string;
    SpecificDialogData?: string;
    TerminalSerialNumber?: string;
    AdditionalData2?: string;
    RetryCounter?: string;
    MAC?: string;
}

export interface Init1Request {
    SNR?: string;
    KNR?: string;
    RandomNumber1?: string;
    SAId?: string;
}

export interface Init2Request{
    SNR?: string;
    Sig2?: string;
    SAId?: string;
}

export interface InitResponse {
    SNR?: string;
    Sig1?: string;
    RandomNumber2?: string;
    Y?: string;
}

export interface DataTransferRequest {
    asciiData?: string;
    parsedData?: any;
}

export interface DataTransferResponse {
    asciiData?: string;
    parsedData?: any;
}

export interface ReconciliationRequest {
    ReceiptNumberFrom?: string;
    ReceiptNumberTo?: string;
    Number?: string;
    Total?: string;
    TransactionsJCB?: string;
    TurnoverJCB?: string;
    TransactionsMC?: string;
    TurnoverMC?: string;
    TransactionsAMEX?: string;
    TurnoverAMEX?: string;
    TransactionsVISA?: string;
    TurnoverVISA?: string;
    TransactionsDINERS?: string;
    TurnoverDINERS?: string;
    TransactionsOTHER?: string;
    TurnoverOTHER?: string;
}

export interface EmvConfigurationRequest {
    MaximumSize?: string;
    AlreadyReceived?: string;
}

export interface EmvConfigurationResponse {
    Remaining?: string;
}

export interface OtherMessageSDD {
    message?: string;
}

