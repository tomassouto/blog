<?php
namespace Drupal\instagram_feed\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure example settings for this site.
 */
class instagramFeedSettingsForm extends ConfigFormBase {
    /**
     * {@inheritdoc}
     */
    public function getFormId() {
        return 'instagram_feed_admin_settings';
    }

    /**
     * {@inheritdoc}
     */
    protected function getEditableConfigNames() {
        return [
            'instagram_feed.settings',
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $config = $this->config('instagram_feed.settings');

        $form['instagram_feed_userid'] = array(
            '#type' => 'textfield',
            '#title' => $this->t('User ID'),
            '#default_value' => $config->get('instagram_feed_userid'),
        );

        $form['instagram_feed_clientid'] = array(
            '#type' => 'textfield',
            '#title' => $this->t('Client ID'),
            '#default_value' => $config->get('instagram_feed_clientid'),
        );

        $form['instagram_feed_accesstoken'] = array(
            '#type' => 'textfield',
            '#title' => $this->t('Access Token'),
            '#default_value' => $config->get('instagram_feed_accesstoken'),
        );

        $form['instagram_feed_limit'] = array(
            '#type' => 'textfield',
            '#title' => $this->t('Limit'),
            '#default_value' => $config->get('instagram_feed_limit'),
        );

        return parent::buildForm($form, $form_state);
    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        // Retrieve the configuration
        \Drupal::configFactory()->getEditable('instagram_feed.settings')
            // Set the submitted configuration setting
            ->set('instagram_feed_userid', $form_state->getValue('instagram_feed_userid'))
            ->set('instagram_feed_clientid', $form_state->getValue('instagram_feed_clientid'))
            ->set('instagram_feed_accesstoken', $form_state->getValue('instagram_feed_accesstoken'))
            ->set('instagram_feed_limit', $form_state->getValue('instagram_feed_limit'))
            ->save();

        parent::submitForm($form, $form_state);
    }
}