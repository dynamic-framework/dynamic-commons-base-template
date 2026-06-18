import type { Meta, StoryObj } from '@storybook/react-vite';

import { useCallback } from 'react';

import {
  DButton,
  DContextProvider,
  DModal,
  DOffcanvas,
  useDPortalContext,
} from '@dynamic-framework/ui-react';

import type { PortalProps } from '@dynamic-framework/ui-react';

type PortalPayloads = {
  modalExample: {
    description: string;
  };
  offcanvasExample: {
    description: string;
  };
  offcanvasBottomExample: {
    description: string;
  };
};

const ModalPortal = ({ payload }: PortalProps<PortalPayloads['modalExample']>) => {
  const { closePortal } = useDPortalContext<PortalPayloads>();

  const handleClose = useCallback(() => {
    closePortal();
  }, [closePortal]);

  return (
    <DModal
      name="modalExample"
      centered
      staticBackdrop
    >
      <DModal.Header
        showCloseButton
        onClose={handleClose}
      >
        <h5 className="fw-bold mb-0">Titulo del Modal</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="mb-1">
          Este es el contenido del modal con la API de portales.
        </p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          variant="outline"
          onClick={handleClose}
        >
          Cerrar
        </DButton>
        <DButton
          color="primary"
          onClick={handleClose}
        >
          Confirmar
        </DButton>
      </DModal.Footer>
    </DModal>
  );
};

const OffcanvasPortal = ({ payload }: PortalProps<PortalPayloads['offcanvasExample']>) => {
  const { closePortal } = useDPortalContext<PortalPayloads>();

  const handleClose = useCallback(() => {
    closePortal();
  }, [closePortal]);

  return (
    <DOffcanvas
      name="offcanvasExample"
      openFrom="end"
    >
      <DOffcanvas.Header
        showCloseButton
        onClose={handleClose}
      >
        <h5 className="fw-bold mb-0">Titulo del Offcanvas</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p className="mb-1">
          Este panel lateral utiliza el contexto de portales de Dynamic UI.
        </p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          variant="outline"
          onClick={handleClose}
        >
          Cerrar
        </DButton>
        <DButton
          color="primary"
          onClick={handleClose}
        >
          Confirmar
        </DButton>
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
};

const OffcanvasBottomPortal = (
  { payload }: PortalProps<PortalPayloads['offcanvasBottomExample']>,
) => {
  const { closePortal } = useDPortalContext<PortalPayloads>();

  const handleClose = useCallback(() => {
    closePortal();
  }, [closePortal]);

  return (
    <DOffcanvas
      name="offcanvasBottomExample"
      openFrom="bottom"
    >
      <DOffcanvas.Header
        showCloseButton
        onClose={handleClose}
      >
        <h5 className="fw-bold mb-0">Offcanvas desde abajo</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p className="mb-1">
          Este offcanvas se abre desde la parte inferior.
        </p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          variant="outline"
          onClick={handleClose}
        >
          Cerrar
        </DButton>
        <DButton
          color="primary"
          onClick={handleClose}
        >
          Entendido
        </DButton>
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
};

const ModalTrigger = () => {
  const { openPortal } = useDPortalContext<PortalPayloads>();

  const handleOpenModal = useCallback(() => {
    openPortal('modalExample', {
      description: 'Abierto desde Storybook con useDPortalContext',
    });
  }, [openPortal]);

  return (
    <DButton onClick={handleOpenModal}>Abrir Modal</DButton>
  );
};

const OffcanvasTrigger = () => {
  const { openPortal } = useDPortalContext<PortalPayloads>();

  const handleOpenOffcanvas = useCallback(() => {
    openPortal('offcanvasExample', {
      description: 'Abierto desde Storybook con useDPortalContext',
    });
  }, [openPortal]);

  return (
    <DButton onClick={handleOpenOffcanvas}>Abrir Offcanvas</DButton>
  );
};

const OffcanvasBottomTrigger = () => {
  const { openPortal } = useDPortalContext<PortalPayloads>();

  const handleOpenOffcanvasBottom = useCallback(() => {
    openPortal('offcanvasBottomExample', {
      description: 'Abierto desde abajo con useDPortalContext',
    });
  }, [openPortal]);

  return (
    <DButton onClick={handleOpenOffcanvasBottom}>Abrir Offcanvas Bottom</DButton>
  );
};

const DualTrigger = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <ModalTrigger />
    <OffcanvasTrigger />
  </div>
);

const withPortalProvider = (content: JSX.Element) => (
  <DContextProvider<PortalPayloads>
    portalName="design-system-portal"
    availablePortals={{
      modalExample: ModalPortal,
      offcanvasExample: OffcanvasPortal,
      offcanvasBottomExample: OffcanvasBottomPortal,
    }}
  >
    {content}
  </DContextProvider>
);

const meta: Meta = {
  title: 'Design System/DModal & DOffcanvas',
  parameters: {
    docs: {
      description: {
        component: 'Referencia visual de `DModal` y `DOffcanvas` de Dynamic UI.',
      },
    },
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj;

export const Modal: Story = {
  name: 'DModal',
  render: () => withPortalProvider(<ModalTrigger />),
};

export const Offcanvas: Story = {
  name: 'DOffcanvas',
  render: () => withPortalProvider(<OffcanvasTrigger />),
};

export const OffcanvasBottom: Story = {
  name: 'DOffcanvas Bottom',
  render: () => withPortalProvider(<OffcanvasBottomTrigger />),
};

export const BothTogether: Story = {
  name: 'Modal + Offcanvas',
  render: () => withPortalProvider(<DualTrigger />),
};
