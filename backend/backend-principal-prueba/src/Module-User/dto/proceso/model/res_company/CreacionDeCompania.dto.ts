// src/dto/model/res_users/CreacionDeUsuario.dto.ts
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreacionDeCompanyCreatedDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly partner_id: number;

  @Expose()
  public readonly currency_id: number;

  @Expose()
  public readonly user_id: number;

  @Expose()
  public readonly sequence: number;

  @Expose()
  public readonly create_date: Date;

  @Expose()
  public readonly parent_id: number;

  @Expose()
  public readonly paperformat_id: number;

  @Expose()
  public readonly external_report_layout_id: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly write_uid: number;

  @Expose()
  public readonly email: string;

  @Expose()
  public readonly phone: string;

  @Expose()
  public readonly mobile: string;

  @Expose()
  public readonly base_onboarding_company_state: string;

  @Expose()
  public readonly font: string;

  @Expose()
  public readonly primary_color: string;

  @Expose()
  public readonly secondary_color: string;

  @Expose()
  public readonly layout_background: string;

  @Expose()
  public readonly report_footer: string;

  @Expose()
  public readonly report_header: string;

  @Expose()
  public readonly company_details: string;

  @Expose()
  public readonly active: boolean;

  @Expose()
  public readonly write_date: Date;

  @Expose()
  public readonly logo_web: string;

  @Expose()
  public readonly resource_calendar_id: number;

  @Expose()
  public readonly partner_gid: number;

  @Expose()
  public readonly iap_enrich_auto_done: boolean;

  @Expose()
  public readonly snailmail_color: boolean;

  @Expose()
  public readonly snailmail_cover: boolean;

  @Expose()
  public readonly snailmail_duplex: boolean;

  @Expose()
  public readonly social_twitter: string;

  @Expose()
  public readonly social_facebook: string;

  @Expose()
  public readonly social_github: string;

  @Expose()
  public readonly social_linkedin: string;

  @Expose()
  public readonly social_youtube: string;

  @Expose()
  public readonly social_instagram: string;

  @Expose()
  public readonly hr_presence_control_email_amount: number;

  @Expose()
  public readonly hr_presence_control_ip_list: string;

  @Expose()
  public readonly nomenclature_id: number;

  @Expose()
  public readonly internal_transit_location_id: number;

  @Expose()
  public readonly stock_mail_confirmation_template_id: number;

  @Expose()
  public readonly annual_inventory_day: number;

  @Expose()
  public readonly annual_inventory_month: string;

  @Expose()
  public readonly stock_move_email_validation: boolean;

  @Expose()
  public readonly stock_sms_confirmation_template_id: number;

  @Expose()
  public readonly stock_move_sms_validation: boolean;

  @Expose()
  public readonly has_received_warning_stock_sms: boolean;

  @Expose()
  public readonly payment_provider_onboarding_state: string;

  @Expose()
  public readonly payment_onboarding_payment_method: string;

  @Expose()
  public readonly message_main_attachment_id: number;

  @Expose()
  public readonly fiscalyear_last_day: number;

  @Expose()
  public readonly transfer_account_id: number;

  @Expose()
  public readonly chart_template_id: number;

  @Expose()
  public readonly default_cash_difference_income_account_id: number;

  @Expose()
  public readonly default_cash_difference_expense_account_id: number;

  @Expose()
  public readonly account_journal_suspense_account_id: number;

  @Expose()
  public readonly account_journal_payment_debit_account_id: number;

  @Expose()
  public readonly account_journal_payment_credit_account_id: number;

  @Expose()
  public readonly account_journal_early_pay_discount_gain_account_id: number;

  @Expose()
  public readonly account_journal_early_pay_discount_loss_account_id: number;

  @Expose()
  public readonly account_sale_tax_id: number;

  @Expose()
  public readonly account_purchase_tax_id: number;

  @Expose()
  public readonly currency_exchange_journal_id: number;

  @Expose()
  public readonly income_currency_exchange_account_id: number;

  @Expose()
  public readonly expense_currency_exchange_account_id: number;

  @Expose()
  public readonly property_stock_account_input_categ_id: number;

  @Expose()
  public readonly property_stock_account_output_categ_id: number;

  @Expose()
  public readonly property_stock_valuation_account_id: number;

  @Expose()
  public readonly incoterm_id: number;

  @Expose()
  public readonly account_opening_move_id: number;

  @Expose()
  public readonly account_default_pos_receivable_account_id: number;

  @Expose()
  public readonly expense_accrual_account_id: number;

  @Expose()
  public readonly revenue_accrual_account_id: number;

  @Expose()
  public readonly automatic_entry_default_journal_id: number;

  @Expose()
  public readonly account_fiscal_country_id: number;

  @Expose()
  public readonly tax_cash_basis_journal_id: number;

  @Expose()
  public readonly account_cash_basis_base_account_id: number;

  @Expose()
  public readonly fiscalyear_last_month: number;

  @Expose()
  public readonly bank_account_code_prefix: number;

  @Expose()
  public readonly cash_account_code_prefix: number;

  @Expose()
  public readonly early_pay_discount_computation: number;

  @Expose()
  public readonly transfer_account_code_prefix: number;

  @Expose()
  public readonly tax_calculation_rounding_method: number;

  @Expose()
  public readonly account_setup_bank_data_state: number;

  @Expose()
  public readonly account_setup_fy_data_state: number;

  @Expose()
  public readonly account_setup_taxes_state: number;

  @Expose()
  public readonly account_onboarding_invoice_layout_state: number;

  @Expose()
  public readonly account_onboarding_sale_tax_state: number;

  @Expose()
  public readonly account_invoice_onboarding_state: number;

  @Expose()
  public readonly account_dashboard_onboarding_state: number;

  @Expose()
  public readonly terms_type: number;

  @Expose()
  public readonly account_setup_bill_state: number;

  @Expose()
  public readonly quick_edit_mode: number;

  @Expose()
  public readonly period_lock_date: number;

  @Expose()
  public readonly fiscalyear_lock_date: number;

  @Expose()
  public readonly tax_lock_date: number;

  @Expose()
  public readonly account_opening_date: number;

  @Expose()
  public readonly invoice_terms: number;

  @Expose()
  public readonly invoice_terms_html: number;

  @Expose()
  public readonly expects_chart_of_accounts: number;

  @Expose()
  public readonly anglo_saxon_accounting: number;

  @Expose()
  public readonly qr_code: number;

  @Expose()
  public readonly invoice_is_email: number;

  @Expose()
  public readonly invoice_is_print: number;

  @Expose()
  public readonly account_use_credit_limit: number;

  @Expose()
  public readonly account_onboarding_create_invoice_state_flag: number;

  @Expose()
  public readonly tax_exigibility: number;

  @Expose()
  public readonly account_storno: number;

  @Expose()
  public readonly po_lock: number;

  @Expose()
  public readonly po_double_validation: number;

  @Expose()
  public readonly po_double_validation_amount: number;

  @Expose()
  public readonly po_lead: number;

  @Expose()
  public readonly invoice_is_snailmail: number;

  @Expose()
  public readonly days_to_purchase: number;

  @Expose()
  public readonly vat_check_vies: boolean;

  @Expose()
  public readonly quotation_validity_days: number;

  @Expose()
  public readonly sale_quotation_onboarding_state: string;

  @Expose()
  public readonly sale_onboarding_order_confirmation_state: string;

  @Expose()
  public readonly sale_onboarding_sample_quotation_state: string;

  @Expose()
  public readonly sale_onboarding_payment_method: string;

  @Expose()
  public readonly portal_confirmation_sign: boolean;

  @Expose()
  public readonly portal_confirmation_pay: boolean;

  @Expose()
  public readonly sale_order_template_id: number;

  @Expose()
  public readonly security_lead: number;

  @Expose()
  public readonly part_id: number;

  // Otros campos según tus requisitos de salida de la creacion de company

  constructor(data: Partial<CreacionDeCompanyCreatedDto>) {
    Object.assign(this, data);
  }
}
