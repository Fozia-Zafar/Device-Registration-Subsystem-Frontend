/*Copyright (c) 2018 Qualcomm Technologies, Inc.
  All rights reserved.

  Redistribution and use in source and binary forms, with or without modification, are permitted (subject to the limitations in the disclaimer below) provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Qualcomm Technologies, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
  NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY THIS LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from "react";
import {Card, CardBody, CardHeader} from "reactstrap";
import {all, equals, isEmpty, isNil} from "ramda";
import StepLoading from "../../../components/Loaders/StepLoading";
import i18n from './../../../i18n';

const DeviceDescription = ({
                       step2Data,
                       stepReady,
                     }) => {
  return (
    <Card>
      <CardHeader>
        <b>{i18n.t('reviewRegistration.step2')}</b>
      </CardHeader>
      <CardBody className='steps-loading'>
        {(((!isNil(step2Data) && !isEmpty(step2Data)) && stepReady) &&
        <div>
          <div>
            <h6 className='text-secondary'>{i18n.t('userRequested')}</h6>
            <table className="table table-striped table-sm table-mobile-label mb-0">
              <thead>
              <tr>
                <th>{i18n.t('brand')}</th>
                <th>{i18n.t('model')}</th>
                <th>{i18n.t('modelnumber')}</th>
                <th>{i18n.t('deviceType')}</th>
                <th>{i18n.t('operatingSystem')}</th>
                <th>{i18n.t('rat')}</th>
              </tr>
              </thead>
              <tbody>
              {((all(equals(null))(step2Data.user_device_description)) &&
              <tr>
                <td colSpan={6}>User device description not found</td>
              </tr>) ||
              step2Data.user_device_description.map((userDevice, i) => {
                if (isNil(userDevice)) {
                  return '';
                } else {
                  return <tr key={i}>
                    <td data-label={i18n.t('brand')}>{userDevice.brand || 'N/A'}</td>
                    <td data-label={i18n.t('model')}>{userDevice.model_name || 'N/A'}</td>
                    <td data-label={i18n.t('modelnumber')}>{userDevice.model_number || 'N/A'}</td>
                    <td data-label={i18n.t('deviceType')}>{userDevice.device_type || 'N/A'}</td>
                    <td data-label={i18n.t('operatingSystem')}>{userDevice.operating_system || 'N/A'}</td>
                    <td data-label={i18n.t('rat')}>{userDevice.radio_access_technology || 'N/A'}</td>
                  </tr>
                }
              })
              }
              </tbody>
            </table>
          </div>
          <div>
            <h6 className='text-secondary mt-4'>{i18n.t('tacDescription')}</h6>
            <table className="table table-striped table-sm table-mobile-label mb-0">
              <thead>
              <tr>
                <th>{i18n.t('brand')}</th>
                <th>{i18n.t('model')}</th>
                <th>{i18n.t('modelnumber')}</th>
                <th>{i18n.t('deviceType')}</th>
                <th>{i18n.t('operatingSystem')}</th>
                <th>{i18n.t('rat')}</th>
              </tr>
              </thead>
              <tbody>
              {((all(equals(null))(step2Data.gsma_device_description)) &&
              <tr>
                <td colSpan={6}>GSMA device description not found</td>
              </tr>) ||
              step2Data.gsma_device_description.map((gsmaDevice, i) => {
                if (isNil(gsmaDevice)) {
                  return '';
                } else {
                  return <tr key={i}>
                    <td data-label={i18n.t('brand')}>{gsmaDevice.brand || 'N/A'}</td>
                    <td data-label={i18n.t('model')}>{gsmaDevice.model_name || 'N/A'}</td>
                    <td data-label={i18n.t('modelnumber')}>{gsmaDevice.model_number || 'N/A'}</td>
                    <td data-label={i18n.t('deviceType')}>{gsmaDevice.device_type || 'N/A'}</td>
                    <td data-label={i18n.t('operatingSystem')}>{gsmaDevice.operating_system || 'N/A'}</td>
                    <td data-label={i18n.t('rat')}>{gsmaDevice.radio_access_technology || 'N/A'}</td>
                  </tr>
                }
              })
              }
              </tbody>
            </table>
          </div>
        </div>) ||
        <StepLoading />
        }
      </CardBody>
    </Card>
  )
};
export default DeviceDescription;